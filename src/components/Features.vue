<template>
        <div class="card-child">
            <div :class="wrapClass">
            <div class="card-content">
                <div class="card-img">
                    <img :src="resolve_img_url(imgScr)" alt="">
                </div>
                <div class="card-desc" >
                    <h3>{{heading}}</h3>
                    <p>{{text}}</p>
                    <button v-show="showButton" type="button" class="btn-card" @click="scroll('#contato')" >{{$t('saibaMais')}}</button>
                </div>
            </div>
            </div>
    </div>
</template>

<script>

    import VueScrollTo from 'vue-scrollto'
    export default {
        name: "Features",
        props: {
            imgScr: String,
            heading: String,
            text: String,
            showButton: Boolean,
            btnURL: String,
            wrapClass: String
        },
        data(){
            return{
            }
        },
        methods: {
            resolve_img_url: function (path) {
                let images = require.context('../assets/img/', false, /\.png$|\.jpg$/)
                return images("./"+path)
            },
            scroll(element) {
                VueScrollTo.scrollTo(element)
            }
        }
    }
</script>

<style scoped>
    section{
        padding: 100px 0;
    }
.space{
    padding-top: 30px;
}
    .card-content {
        background: #ffffff;
        border: 4px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
        padding-bottom: 12px;
    }

    .card-img {
        position: relative;
        overflow: hidden;
        border-radius: 0;
        z-index: 1;
    }

    .card-img img {
        width: 100%;
        height: auto;
        display: block;
    }

    .card-img span {
        position: absolute;
        top: 15%;
        left: 12%;
        background: #1ABC9C;
        padding: 6px;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        transform: translate(-50%,-50%);
    }
    .card-img span h4{
        font-size: 12px;
        margin:0;
        padding:10px 5px;
        line-height: 0;
    }

    .card-child{

    }
    .card-desc {
        padding: 1.25rem;
    }

    .card-desc h3 {
        color: #000000;
        font-weight: 600;
        font-size: 1.5em;
        line-height: 1.3em;
        margin-top: 0;
        margin-bottom: 5px;
        padding: 0;
    }

    .card-desc p {
        color: #747373;
        font-size: 14px;
        font-weight: 400;
        font-size: 1em;
        line-height: 1.5;
        margin: 0px;
        margin-bottom: 20px;
        padding: 0;
    }
    .btn-card{
        border-radius: 2px;
        background-color: #204d74;
        border: none;
        font-weight: 500;
        letter-spacing: 2px;
        color: #ffffff;
        text-transform: uppercase;
        margin-top: 30px;
        height: 50px;
        padding: 6px 12px;

    }
    .btn-card:hover {
        background-color: #222;
    }

    a.btn-card {
        text-decoration: none;
        color: #fff;
    }
</style>