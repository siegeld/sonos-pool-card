import { LovelaceCardConfig } from "custom-card-helpers";

export interface SonosPoolCardConfig extends LovelaceCardConfig {
  pool: string;
  zone_id: string;
  name?: string;
  mode?: "normal" | "compact";
  dante_rx_l?: string;
  dante_rx_r?: string;
  nax_entity?: string;
}
