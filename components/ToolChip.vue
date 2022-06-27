<template>
  <div class="tooltip-text">
    <slot></slot>
  </div>
</template>

<style lang="scss">
/* カーソルを重ねる要素 */
.tooltip {
  position: relative; /* ツールチップの位置の基準に */
  cursor: pointer; /* カーソルを当てたときにポインターに */

  /* ツールチップのテキスト */
  .tooltip-text {
    display: inline;
    opacity: 0; /* はじめは隠しておく */
    visibility: hidden; /* はじめは隠しておく */
    position: absolute; /* 絶対配置 */
    left: 50%; /* 親に対して中央配置 */
    transform: translateX(-50%); /* 親に対して中央配置 */
    bottom: -40px; /* 親要素下からの位置 */
    display: inline-block;
    padding: 8px 15px; /* 余白 */
    white-space: nowrap; /* テキストを折り返さない */
    font-size: 0.8rem; /* フォントサイズ */
    line-height: 1.3; /* 行間 */
    background: #333; /* 背景色 */
    color: #fff; /* 文字色 */
    border-radius: 3px; /* 角丸 */
    transition: 0.3s ease-in; /* アニメーション */
    // font-family: 'Montserrat';
  }
}


/* ホバー時にツールチップの非表示を解除 */
.tooltip:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
}
</style>