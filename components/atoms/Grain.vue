<template>
  <div>
    <canvas ref="grain" class="grain"></canvas>
  </div>
</template>


<script>
export default {
  data: () => ({
    patternSize: 400,
    patternScaleX: 0.3,
    patternScaleY: 0.3,
    patternRefreshInterval: 6,
    patternAlpha: 20,
    canvas: "",
    ctx: "",
    patternCanvas: "",
    patternCtx: "",
    patternData: "",
    patternPixelDataLength: "",
    frame: 0,
  }),
  mounted() {
    this.canvas = this.$refs.grain;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.scale(this.patternScaleX, this.patternScaleY);
    this.patternCanvas = document.createElement("canvas");
    this.patternCanvas.width = this.patternSize;
    this.patternCanvas.height = this.patternSize;
    this.patternCtx = this.patternCanvas.getContext("2d");
    this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
    this.patternPixelDataLength = this.patternSize * this.patternSize * 4;
    window.addEventListener("resize", this.resize),
    this.resize(),
    window.requestAnimationFrame(this.loop);
  },
  methods: {
    resize() {
      (this.canvas.width = window.innerWidth * devicePixelRatio),
        (this.canvas.height = window.innerHeight * devicePixelRatio);
    },
    update() {
      for (
        var t = this.patternPixelDataLength,
          e = this.patternData,
          i = this.patternAlpha,
          n = this.patternCtx,
          s = 0;
        s < t;
        s += 4
      ) {
        var r = 255 * Math.random();
        (e.data[s] = r),
          (e.data[s + 1] = r),
          (e.data[s + 2] = r),
          (e.data[s + 3] = i);
      }
      n.putImageData(e, 0, 0);
    },
    draw() {
      const t = this.ctx,
        e = this.patternCanvas,
        i = this.canvas,
        n = (this.viewHeight, i.width),
        s = i.height;
      t.clearRect(0, 0, n, s),
        (t.fillStyle = t.createPattern(e, "repeat")),
        t.fillRect(0, 0, n, s);
    },
    loop() {
      const t = ++this.frame % this.patternRefreshInterval == 0;
      t && (this.update(), this.draw());
      window.requestAnimationFrame(this.loop);
    },
  },
};
</script>
<style>
.grain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>