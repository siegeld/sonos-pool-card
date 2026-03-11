import { css } from "lit";

export const styles = css`
  ha-card {
    padding: 12px 16px 16px;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: var(--ha-card-header-color, var(--primary-text-color));
    padding: 0 0 8px;
    margin: 0;
  }

  .pool-count {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color, #727272);
    background: var(--secondary-background-color, #f5f5f5);
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
  }

  .card-content {
    padding: 0;
  }

  .unassigned {
    display: flex;
    justify-content: center;
    padding: 12px 0;
  }

  .grab-btn,
  .release-btn {
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  .grab-btn {
    background-color: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .grab-btn:hover {
    filter: brightness(1.1);
  }

  .grab-btn:active,
  .release-btn:active {
    transform: scale(0.97);
  }

  .release-btn {
    width: 100%;
    margin-top: 12px;
    background-color: var(--secondary-background-color, #f5f5f5);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color, #e0e0e0);
  }

  .release-btn:hover {
    background-color: var(--divider-color, #e0e0e0);
  }

  .player-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .album-art {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .track-info {
    min-width: 0;
    flex: 1;
  }

  .player-name {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color, #727272);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .title {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .artist {
    font-size: 13px;
    color: var(--secondary-text-color, #727272);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .controls {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .ctrl-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    color: var(--primary-text-color);
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.2s ease;
  }

  .ctrl-btn:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .ctrl-btn:active {
    transform: scale(0.93);
  }

  .ctrl-btn ha-icon {
    --mdc-icon-size: 28px;
  }

  .volume-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .vol-icon {
    color: var(--secondary-text-color, #727272);
    --mdc-icon-size: 20px;
    flex-shrink: 0;
  }

  .volume-slider {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background: var(--divider-color, #e0e0e0);
    outline: none;
  }

  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    cursor: pointer;
  }

  .volume-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    cursor: pointer;
    border: none;
  }

  /* ── Compact mode ── */

  .compact-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, 0 2px 2px rgba(0,0,0,0.1));
  }

  .compact-wrap.unassigned {
    justify-content: space-between;
  }

  .compact-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .compact-grab {
    padding: 6px 16px;
    font-size: 13px;
  }

  .compact-art {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .compact-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .compact-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .compact-artist {
    font-size: 11px;
    color: var(--secondary-text-color, #727272);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .compact-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    color: var(--primary-text-color);
    -webkit-tap-highlight-color: transparent;
    flex-shrink: 0;
  }

  .compact-btn:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .compact-btn:active {
    transform: scale(0.9);
  }

  .compact-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .compact-btn.vol ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color, #727272);
  }

  .compact-btn.release ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color, #727272);
  }
`;
