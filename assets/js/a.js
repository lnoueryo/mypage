
var loading = {
    onStart: function () { this.landingCanvas(); }, landingCanvas: function () {
        var canvas = document.querySelector(".landing_canvas"); canvas.width = window.innerWidth; canvas.height = window.innerHeight; var context = canvas.getContext('2d'); var radius = {}; radius.value = 0; var w = window.innerWidth, h = window.innerHeight; var mouse = { x: w / 2, y: h / 2, xPos: w / 2, yPos: h / 2 }; context.fillStyle = 'rgba(20,28,39,1)'; context.fillRect(0, 0, 2 * w, 2 * h); function drawCircle(x, y, r) { context.fillStyle = 'rgba(20,28,39,1)'; context.fillRect(0, 0, 2 * w, 2 * h); context.shadowBlur = 80; context.shadowColor = 'rgba(245,192,151,1)'; context.fillStyle = "#F5C097"; context.beginPath(); context.arc(x, y, r, 0, 2 * Math.PI); context.fill(); context.closePath(); }
        $(window).on('resize', function () { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h; var ctx = context; ctx.canvas.width = window.innerWidth; ctx.canvas.height = window.innerHeight; context.fillStyle = 'rgba(20,28,39,1)'; context.fillRect(0, 0, 2 * w, 2 * h); }); var renderFlag = true; function render() { drawCircle(w / 2, h / 2, radius.value); if (renderFlag) { window.requestAnimationFrame(render); } }
        render(); if (window.innerWidth > 600) { TweenMax.to(radius, 2, { value: 200, ease: Power3.easeInOut }); } else { TweenMax.to(radius, 2, { value: 120, ease: Power3.easeInOut }); }
        TweenMax.to('.landing__logo', 1.5, { scale: 1, opacity: 1, ease: Power2.easeInOut, onComplete: function () { setTimeout(function () { splash.onLoaded(); }, 800); } }); TweenMax.to('.landing__logo', 1, { scale: 1.3, opacity: 0, delay: 1.8, ease: Power2.easeInOut }); TweenMax.to(radius, 1, { value: canvas.width, delay: 1.8, ease: Power2.easeInOut }); TweenMax.to('.landing', 1, { opacity: 0, delay: 1.8, ease: Power2.easeInOut, onComplete: function () { $('.landing').addClass('is-hide') } });
    }
}; var grain = {
    init: function () { var _this = this; _this.patternSize = 400, _this.patternScaleX = .3, _this.patternScaleY = .3, _this.patternRefreshInterval = 6, _this.patternAlpha = 20, _this.canvas = document.querySelector(".grain"), _this.ctx = _this.canvas.getContext("2d"), _this.ctx.scale(_this.patternScaleX, _this.patternScaleY), _this.patternCanvas = document.createElement("canvas"), _this.patternCanvas.width = _this.patternSize, _this.patternCanvas.height = _this.patternSize, _this.patternCtx = _this.patternCanvas.getContext("2d"), _this.patternData = _this.patternCtx.createImageData(_this.patternSize, _this.patternSize), _this.patternPixelDataLength = _this.patternSize * _this.patternSize * 4, _this.resize = _this.resize.bind(_this), _this.loop = _this.loop.bind(_this), _this.frame = 0, window.addEventListener("resize", _this.resize), _this.resize(), window.requestAnimationFrame(_this.loop) }, resize: function () { var _this = this; _this.canvas.width = window.innerWidth * devicePixelRatio, _this.canvas.height = window.innerHeight * devicePixelRatio }, update: function () {
        var _this = this; for (var t = _this.patternPixelDataLength, e = _this.patternData, i = _this.patternAlpha, n = _this.patternCtx, s = 0; s < t; s += 4) { var r = 255 * Math.random(); e.data[s] = r, e.data[s + 1] = r, e.data[s + 2] = r, e.data[s + 3] = i }
        n.putImageData(e, 0, 0)
    }, draw: function () { var _this = this; var t = _this.ctx, e = _this.patternCanvas, i = _this.canvas, n = (_this.viewHeight, i.width), s = i.height; t.clearRect(0, 0, n, s), t.fillStyle = t.createPattern(e, "repeat"), t.fillRect(0, 0, n, s) }, loop: function () { var _this = this; var t = ++_this.frame % _this.patternRefreshInterval == 0; t && (_this.update(), _this.draw()), window.requestAnimationFrame(_this.loop) }
};

loading.onStart()
grain.init()
console.log('KHG')