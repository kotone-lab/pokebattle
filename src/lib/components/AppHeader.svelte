<header class="app-header">
  <div>
    <h1>CABT Battle Viewer</h1>
    <p>人間 vs AI 対戦・AI vs AI リプレイ観戦</p>
  </div>
</header>

<style>
  .app-header {
    position: absolute;
    top: 28px;
    left: 24px;
    right: 24px;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
  }

  .app-header h1 {
    margin: 0;
    font-size: 28px;
    line-height: 1;
    letter-spacing: 0;
    color: var(--text-primary);
  }

  .app-header p {
    display: none;
  }
</style>
