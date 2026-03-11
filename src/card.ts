import { html, LitElement, nothing } from "lit";
import { state } from "lit/decorators/state.js";
import { HomeAssistant } from "custom-card-helpers";
import { styles } from "./card.styles";
import { SonosPoolCardConfig } from "./types";

interface PlayerState {
  entityId: string;
  friendlyName: string;
  state: string;
  title: string;
  artist: string;
  picture: string;
  volume: number;
}

export class SonosPoolCard extends LitElement {
  @state() private _config!: SonosPoolCardConfig;
  @state() private _player: PlayerState | null = null;
  @state() private _poolUsed = 0;
  @state() private _poolTotal = 0;

  private _hass!: HomeAssistant;

  static styles = styles;

  setConfig(config: SonosPoolCardConfig) {
    if (!config.pool) throw new Error("pool is required");
    if (!config.zone_id) throw new Error("zone_id is required");
    this._config = config;
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;

    const sensorId = `sensor.sonos_pool_${this._config.pool}`;
    const sensor = hass.states[sensorId];
    if (!sensor) {
      this._player = null;
      return;
    }

    const assignments = sensor.attributes.assignments || {};
    this._poolTotal = sensor.attributes.total || 0;
    this._poolUsed = Object.keys(assignments).length;
    const entityId = assignments[this._config.zone_id];

    if (!entityId) {
      this._player = null;
      return;
    }

    const stateObj = hass.states[entityId];
    if (!stateObj) {
      this._player = null;
      return;
    }

    const attrs = stateObj.attributes;
    this._player = {
      entityId,
      friendlyName: attrs.friendly_name || entityId.replace("media_player.", ""),
      state: stateObj.state,
      title: attrs.media_title || "",
      artist: attrs.media_artist || "",
      picture: attrs.entity_picture || "",
      volume: attrs.volume_level ?? 0,
    };
  }

  private async _grab() {
    const resp: any = await this._hass.connection.sendMessagePromise({
      type: "call_service",
      domain: "sonos_pool",
      service: "grab",
      service_data: {
        pool: this._config.pool,
        zone_id: this._config.zone_id,
      },
      return_response: true,
    });

    const data = resp?.response;
    if (!data?.dante_tx_l || !data?.dante_tx_r) return;

    const { dante_rx_l, dante_rx_r } = this._config;
    if (dante_rx_l) {
      this._hass.callService("select", "select_option", {
        entity_id: dante_rx_l,
        option: data.dante_tx_l,
      });
    }
    if (dante_rx_r) {
      this._hass.callService("select", "select_option", {
        entity_id: dante_rx_r,
        option: data.dante_tx_r,
      });
    }
  }

  private _release() {
    this._hass.callService("sonos_pool", "release", {
      pool: this._config.pool,
      zone_id: this._config.zone_id,
    });
  }

  private _mediaCommand(service: string) {
    if (!this._player) return;
    this._hass.callService("media_player", service, {
      entity_id: this._player.entityId,
    });
  }

  private _setVolume(e: Event) {
    if (!this._player) return;
    const value = parseFloat((e.target as HTMLInputElement).value);
    this._hass.callService("media_player", "volume_set", {
      entity_id: this._player.entityId,
      volume_level: value,
    });
  }

  render() {
    if (this._config.mode === "compact") return this._renderCompact();
    return this._renderNormal();
  }

  private _poolBadge() {
    return html`<span class="pool-count">${this._poolUsed}/${this._poolTotal}</span>`;
  }

  private _renderNormal() {
    const name = this._config.name || this._config.zone_id;

    if (!this._player) {
      return html`
        <ha-card>
          <div class="card-header">${name} ${this._poolBadge()}</div>
          <div class="card-content unassigned">
            <button class="grab-btn" @click="${this._grab}">Grab</button>
          </div>
        </ha-card>
      `;
    }

    const p = this._player;
    const isPlaying = p.state === "playing";

    return html`
      <ha-card>
        <div class="card-header">${name} ${this._poolBadge()}</div>
        <div class="card-content assigned">
          <div class="player-info">
            ${p.picture
              ? html`<img class="album-art" src="${p.picture}" />`
              : nothing}
            <div class="track-info">
              <div class="player-name">${p.friendlyName}</div>
              ${p.title
                ? html`<div class="title">${p.title}</div>`
                : nothing}
              ${p.artist
                ? html`<div class="artist">${p.artist}</div>`
                : nothing}
            </div>
          </div>
          <div class="controls">
            <button class="ctrl-btn" @click="${() => this._mediaCommand("media_previous_track")}">
              <ha-icon icon="mdi:skip-previous"></ha-icon>
            </button>
            <button class="ctrl-btn" @click="${() => this._mediaCommand("media_play_pause")}">
              <ha-icon icon="${isPlaying ? "mdi:pause" : "mdi:play"}"></ha-icon>
            </button>
            <button class="ctrl-btn" @click="${() => this._mediaCommand("media_stop")}">
              <ha-icon icon="mdi:stop"></ha-icon>
            </button>
            <button class="ctrl-btn" @click="${() => this._mediaCommand("media_next_track")}">
              <ha-icon icon="mdi:skip-next"></ha-icon>
            </button>
          </div>
          <div class="volume-row">
            <ha-icon icon="mdi:volume-medium" class="vol-icon"></ha-icon>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              .value="${String(p.volume)}"
              @change="${this._setVolume}"
              class="volume-slider"
            />
          </div>
          <button class="release-btn" @click="${this._release}">Release</button>
        </div>
      </ha-card>
    `;
  }

  private _renderCompact() {
    if (!this._player) {
      return html`
        <div class="compact-wrap unassigned">
          <span class="compact-name">${this._config.name || this._config.zone_id}</span>
          ${this._poolBadge()}
          <button class="grab-btn compact-grab" @click="${this._grab}">Grab</button>
        </div>
      `;
    }

    const p = this._player;
    const isPlaying = p.state === "playing";

    return html`
      <div class="compact-wrap">
        ${p.picture
          ? html`<img class="compact-art" src="${p.picture}" />`
          : nothing}
        <div class="compact-info">
          ${p.title
            ? html`<span class="compact-title">${p.title}</span>`
            : html`<span class="compact-title">${p.friendlyName}</span>`}
          ${p.artist
            ? html`<span class="compact-artist">${p.artist}</span>`
            : nothing}
        </div>
        <button class="compact-btn" @click="${() => this._mediaCommand("media_play_pause")}">
          <ha-icon icon="${isPlaying ? "mdi:pause" : "mdi:play"}"></ha-icon>
        </button>
        <button class="compact-btn" @click="${() => this._mediaCommand("media_next_track")}">
          <ha-icon icon="mdi:skip-next"></ha-icon>
        </button>
        <button class="compact-btn vol" @click="${() => this._mediaCommand("volume_down")}">
          <ha-icon icon="mdi:volume-minus"></ha-icon>
        </button>
        <button class="compact-btn vol" @click="${() => this._mediaCommand("volume_up")}">
          <ha-icon icon="mdi:volume-plus"></ha-icon>
        </button>
        <button class="compact-btn release" @click="${this._release}">
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
        ${this._poolBadge()}
      </div>
    `;
  }

  static getConfigElement() {
    return document.createElement("sonos-pool-card-editor");
  }

  static getStubConfig() {
    return {
      pool: "",
      zone_id: "",
      name: "",
    };
  }

  getCardSize() {
    if (this._config.mode === "compact") return 1;
    return this._player ? 4 : 2;
  }
}
