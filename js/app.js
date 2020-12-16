var app = new Vue({
    el: '#app',
    data: {
        video1: document.getElementById('video1'),
        hueValue: 0,
        windowSize: {
            x: 0,
            y: 0,
        },
    },
    computed: {
        video1Style(){
            var video1Filter = this.video1.style.filter;
            video1Filter = `hue-rotate(${this.hueValue}deg)`;
            var style = `filter: ${video1Filter}`;
            return style;
        }
    },
    mounted(){
        var that = this;
		setInterval(function() {
            if(that.hueValue>359){
                that.hueValue = 0;
            } else {
                that.hueValue = that.hueValue + 1;
            }
        }, 70);
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onResize () {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        },
        scrollTop: function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    }
})