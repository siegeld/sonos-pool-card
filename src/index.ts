import { SonosPoolCard } from "./card";
import { SonosPoolCardEditor } from "./editor";

customElements.define("sonos-pool-card", SonosPoolCard);
customElements.define("sonos-pool-card-editor", SonosPoolCardEditor);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "sonos-pool-card",
  name: "Sonos Pool",
  description: "Grab/release Sonos speakers from a pool with media controls",
});
