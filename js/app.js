var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        isCarouselModal: false,
        disabled: true,
        show: [{opacity: 1,transition: 'all 1s',transform: 'translateX(0px)',position: 'relative'},{opacity: 0,transition: 'all 1s',transform: 'translateX(1500px)',position: 'absolute'},{opacity: 0,transition: 'all 1s',transform: 'translateX(-1500px)',position: 'absolute'}],
        src: ['img/carousel/11.png','img/carousel/01.png','img/carousel/02.png','img/carousel/03.png','img/carousel/04.png','img/carousel/05.png','img/carousel/06.png','img/carousel/07.png','img/carousel/08.png','img/carousel/09.png'],
        srcKey: [0,2,2,2,2,2,2,2,1],
        carouselKey: 0,
        isMain: false,
        isLogo2: false,
        isMainLogo: false,
        isName: false,
        isNav: false,
        video1: document.getElementById('video1'),
        hueValue: 0,
        windowSize: {
            x: 0,
            y: 0,
        },
        value: 0,
        onboarding: 0,
        features: [
            {
                type: 'FRONT-END',
                content: [
                    'vuetifyを使ったUI設計',
                    'レスポンシブ',
                    'AJAX送信後のレスポンスによる非同期処理',
                    'DOMが形成される前のAJAXによるデータの受取',
                    '一部Vueのタイプスクリプト、Vue.extendを用いた開発',
                    'ライブラリVueCropperを用いた画像のクロッピング',
                    'バイナリーデータ、base64やjson文字列などエンコード・デコード'
                ]
            },
            {
                type: 'BACK-END',
                content: [
                    // 'AJAXを使ったREST APIの構築',
                    // 'laravel標準のもの＋ログイン以外に利用するパスワードチェックのバリデーション作成',
                    'laravel標準のもの＋Oauthの認証を実装',
                    '会員登録時に送信するメールをキュージョブで非同期',
                    // 'イベント、リスナー、キュージョブを使ってパスワードハッシュ化する前のデータをメール送信',
                    'データベース正規化',
                    'N+1問題を意識したテーブルの関連付け（関数作成）',
                    'シーダーを使った各テーブルのレコード作成',
                    'ストレージ、データベースに複数の画像を保存する機能を実装',
                ]
            },
            {
                type: 'INFRASTRUCTURE',
                content: [
                    'EC2によるウェブサーバー（パブリックサブネット）の構築',
                    'EC2によるデータベースサーバー（プライベートサブネット）の構築',
                    'VPCを利用したネットワーク設定',
                    'Route53にドメイン登録',
                ]
            },
        ],
        tab: [true,false,false],
        qiita: '',
        obj: {aboutMe1: false,aboutMe2: false,skill1: false,skill2: false,skill3: false,skill4: false,port1: false,mymemo: false}
    },
    computed: {
        video1Style(){
            var video1Filter = this.video1.style.filter;
            video1Filter = `hue-rotate(${this.hueValue}deg)`;
            var style = `filter: ${video1Filter}`;
            return style;
        },
    },
    created(){
        axios.get('https://qiita.com/api/v2/users/popo62520908/items')
        .then((res) => {
            this.qiita = res.data.slice(0,4);
        })
        .catch(function(error){
            console.log(error)
        })
    },
    mounted(){
        var that = this;
		that.interval = setInterval(function() {
            that.$set(that.srcKey,that.carouselKey,1)
            if(that.carouselKey == 0){
                that.$set(that.srcKey,that.srcKey.length-1,2)
            } else {
                that.$set(that.srcKey,that.carouselKey-1,2)
            }
            that.carouselKey++
            if(that.carouselKey<that.src.length){
                that.$set(that.srcKey,that.carouselKey,0)
            } else {
                that.carouselKey = 0;
                that.$set(that.srcKey,that.carouselKey,0)
            }
        }, 7700);
		setInterval(function() {
            if(that.hueValue>359){
                that.hueValue = 0;
            } else {
                that.hueValue = that.hueValue + 1;
            }
        }, 77);

        setTimeout(function(){
            that.isMain = true;
        },200)
        setTimeout(function(){
            that.isName = true;
            that.getTargetWidth()
            that.disabled = false;
        },1500)
        setTimeout(function(){
            that.isNav = true;
        },3000)
        setTimeout(function(){
            that.isLogo2 = true;
        },3500)
        setTimeout(function(){
            that.isMainLogo = true;
        },5000)
        window.addEventListener('scroll', this.calculateScrollY);
        window.addEventListener('resize', this.onResize);
        if(this.windowSize.x < 480){
            this.obj.aboutMe1 = true;
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        calculateScrollY() {
            var currentPosition = window.scrollY + window.innerHeight;
            var aboutMe1 = this.$refs.aboutMe1.getBoundingClientRect().top;
            var aboutMe2 = this.$refs.aboutMe2.getBoundingClientRect().top;
            var skill1 = this.$refs.skill1.getBoundingClientRect().top;
            var skill2 = this.$refs.skill2.getBoundingClientRect().top;
            var skill3 = this.$refs.skill3.getBoundingClientRect().top;
            var skill4 = this.$refs.skill4.getBoundingClientRect().top;
            var port1 = this.$refs.port1.getBoundingClientRect().top+1000;
            var mymemo = this.$refs.mymemo.getBoundingClientRect().top+1000;

            var array = [aboutMe1, aboutMe2, skill1, skill2, skill3, skill4,port1,mymemo];
            var array2 = ['aboutMe1', 'aboutMe2', 'skill1', 'skill2','skill3','skill4','port1','mymemo'];
            // console.log(this.obj[array[0]])
            let adjust;
            if (this.windowSize.x<768) {
                adjust = 100;
            } else {
                adjust = 300;
            }
            for (let i = 0; i < array.length; i++) {
                if (array[i] - currentPosition<-adjust) {
                    this.$set(this.obj, array2[i],true);
                } else {
                    this.$set(this.obj, array2[i],false);
                }
            }
        },
        sortGithubCode(key){
            var basicUrl = `https://api.github.com/repos/lnoueryo/${this.github[key].name}/contents/`
            var modelPath = basicUrl + 'app';
        },
        tabKey(key){
            this.tab = [false,false,false];
            this.$set(this.tab,key,true);
        },
        openCarouselModal(key){
            this.isCarouselModal = true;
        },
        getTargetWidth(){
            this.show[1].transform = `translateX(${this.$refs.carouselFlame.clientWidth}px)`;
            this.show[2].transform = `translateX(-${this.$refs.carouselFlame.clientWidth-50}px)`;
        },
        carouselNext(){
            this.disabled = true;
            clearInterval(this.interval);
            var that = this;
            that.$set(that.srcKey,that.carouselKey,1)
            if(that.carouselKey == 0){
                that.$set(that.srcKey,that.srcKey.length-1,2)
            } else {
                that.$set(that.srcKey,that.carouselKey-1,2)
            }
            that.carouselKey++
            if(that.carouselKey<that.src.length){
                that.$set(that.srcKey,that.carouselKey,0)
            } else {
                that.carouselKey = 0;
                that.$set(that.srcKey,that.carouselKey,0)
            }
            that.interval = setInterval(function() {
                that.$set(that.srcKey,that.carouselKey,1)
                if(that.carouselKey == 0){
                    that.$set(that.srcKey,that.srcKey.length-1,2)
                } else {
                    that.$set(that.srcKey,that.carouselKey-1,2)
                }
                that.carouselKey++
                if(that.carouselKey<that.src.length){
                    that.$set(that.srcKey,that.carouselKey,0)
                } else {
                    that.carouselKey = 0;
                    that.$set(that.srcKey,that.carouselKey,0)
                }
            }, 7700);
            setTimeout(function(){
                that.disabled = false;
            },400)
        },
        carouselPrev(){
            this.disabled = true;
            clearInterval(this.interval);
            var that = this;
            that.$set(that.srcKey,that.carouselKey,2)
            if(that.carouselKey == 0){
                that.$set(that.srcKey,that.srcKey.length-1,0)
            } else {
                that.$set(that.srcKey,that.carouselKey-1,0)
            }
            that.carouselKey--
            if(that.carouselKey == -1){
                that.carouselKey = that.srcKey.length-1;
                that.$set(that.srcKey,that.carouselKey-1,1)
            } else if(that.carouselKey == 0) {
                that.$set(that.srcKey,that.srcKey.length-1,1)
            } else {
                that.$set(that.srcKey,that.carouselKey-1,1)
            }

            that.interval = setInterval(function() {
                that.$set(that.srcKey,that.carouselKey,1)
                if(that.carouselKey == 0){
                    that.$set(that.srcKey,that.srcKey.length-1,2)
                } else {
                    that.$set(that.srcKey,that.carouselKey-1,2)
                }
                that.carouselKey++
                if(that.carouselKey<that.src.length){
                    that.$set(that.srcKey,that.carouselKey,0)
                } else {
                    that.carouselKey = 0;
                    that.$set(that.srcKey,that.carouselKey,0)
                }
            }, 7700);
            setTimeout(function(){
                that.disabled = false;
            },300)
        },
        onResize () {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight }
            this.getTargetWidth()
        },
        scrollTop: function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        next () {
            this.onboarding = this.onboarding + 1 === this.value
            ? 0
            : this.onboarding + 1
        },
        prev () {
            this.onboarding = this.onboarding - 1 < 0
            ? this.length - 1
            : this.onboarding - 1
        },
    }
})