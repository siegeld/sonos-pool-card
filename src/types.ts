import { LovelaceCardConfig } from "custom-card-helpers";

export interface SonosPoolCardConfig extends LovelaceCardConfig {
  pool: string;
  zone_id: string;
  name?: string;
}
