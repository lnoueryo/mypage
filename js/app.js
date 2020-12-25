var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
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
                type: 'Front-End',
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
                type: 'Back-End',
                content: [
                    'AJAXを使ったREST APIの構築',
                    'laravel標準のもの＋ログイン以外に利用するパスワードチェックのバリデーション作成',
                    'laravel標準のもの＋Oauthの認証を実装',
                    '会員登録時に送信するメールをキュージョブで非同期',
                    'イベント、リスナー、キュージョブを使ってパスワードハッシュ化する前のデータをメール送信',
                    'データベース正規化',
                    'N+1問題やhttpメソッドのデリートを意識したテーブルの関連付け（関数作成）',
                    'シーダーを使った各テーブルのレコード作成',
                    '複数の画像をストレージとデータベースに保存する機能を実装',
                    'ユーザー検索機能',
                ]
            },
            {
                type: 'infrastructure',
                content: [
                    'EC2によるウェブサーバー（パブリックサブネット）の構築',
                    'EC2によるデータベースサーバー（プライベートサブネット）の構築',
                    'VPCを利用したネットワーク設定',
                    'Route53にドメイン登録',
                ]
            },
        ]
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
        }, 25);

        setTimeout(function(){
            that.isMain = true;
        },200)
        setTimeout(function(){
            that.isName = true;
        },1500)
        setTimeout(function(){
            that.isNav = true;
        },3000)
        setTimeout(function(){
            that.isLogo2 = true;
        },3500)
        setTimeout(function(){
            that.isMainLogo = true;
        },7000)
        window.addEventListener('resize', this.onResize);
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