import { html, LitElement } from "lit";
import { state } from "lit/decorators/state.js";
import { HomeAssistant } from "custom-card-helpers";
import { SonosPoolCardConfig } from "./types";
import { editorStyles } from "./editor.styles";

export class SonosPoolCardEditor extends LitElement {
  @state() _config!: SonosPoolCardConfig;
  @state() _hass!: HomeAssistant;
  @state() _pools: string[] = [];

  static styles = editorStyles;

  setConfig(config: SonosPoolCardConfig) {
    this._config = config;
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._discoverPools();
  }

  private _discoverPools() {
    const pools: string[] = [];
    for (const eid of Object.keys(this._hass.states)) {
      if (eid.startsWith("sensor.sonos_pool_")) {
        pools.push(eid.replace("sensor.sonos_pool_", ""));
      }
    }
    pools.sort();
    this._pools = pools;
  }

  render() {
    return html`
      <div class="form">
        <div class="row">
          <label>Name</label>
          <input
            .value="${this._config.name || ""}"
            @input="${(e: Event) =>
              this._valueChanged(
                "name",
                (e.target as HTMLInputElement).value
              )}"
            placeholder="Zone name"
          />
        </div>
        <div class="row">
          <label>Pool</label>
          <select
            @change="${(e: Event) =>
              this._valueChanged(
                "pool",
                (e.target as HTMLSelectElement).value
              )}"
          >
            <option value="" ?selected="${!this._config.pool}">
              Select a pool...
            </option>
            ${this._pools.map(
              (p) => html`
                <option
                  value="${p}"
                  ?selected="${this._config.pool === p}"
                >
                  ${p}
                </option>
              `
            )}
          </select>
        </div>
        <div class="row">
          <label>Zone ID</label>
          <input
            .value="${this._config.zone_id || ""}"
            @input="${(e: Event) =>
              this._valueChanged(
                "zone_id",
                (e.target as HTMLInputElement).value
              )}"
            placeholder="e.g. kitchen"
          />
        </div>
      </div>
    `;
  }

  private _valueChanged(key: string, value: any) {
    const config = { ...this._config };
    if (value === undefined || value === "") {
      delete (config as any)[key];
    } else {
      (config as any)[key] = value;
    }
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }
}
