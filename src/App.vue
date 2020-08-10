<template>
    <div class="vue-template">
        <span class="language">
            <a class="tight" v-for="entry in languages" :key="entry.title" href="#"
               @click="changeLocale(entry.language)">
              <country-flag :country="entry.flag"/>
            </a>
        </span>
        <div class="navbar navbar-default navbar-static-top" id="menu"
             :style="{ backgroundColor: this.params[$selected].cores[0]}">
            <div class="container">
                <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                    </button>
                    <a href="index.html" class="navbar-brand">
                        <img v-show="$selected == 0" src="./assets/img/logo_scc4.png" height="35"/>
                        <img v-show="$selected == 1" src="./assets/img/logo_portal_postal_white.png" height="35"/>
                        <img v-show="$selected == 2" src="./assets/img/logo_boxcubo_white.png" height="35"/>
                        <img v-show="$selected == 3" src="./assets/img/logo_scc4_white.png" height="35"/>
                    </a>
                </div>
                <div class="collapse navbar-collapse" >
                    <ul class="nav navbar-nav navbar-right linha">
                        <li v-bind:class="{active:$selected == 0}" >
                            <router-link to="/home"><a herf="#"
                                                       :style="{'color':this.params[$selected].cores[4]}"
                            >Home</a></router-link>
                        </li>
                        <li v-bind:class="{active:$selected == 1}">
                            <router-link to="/portalpostal"><a herf="#"
                                                               :style="{'color':this.params[$selected].cores[4]}"
                            >Portal Postal</a></router-link>
                        </li>
                        <li v-bind:class="{active:$selected == 2}">
                            <router-link to="/boxcubo"><a herf="#"
                                                          :style="{'color':this.params[$selected].cores[4]}"
                            >Boxcubo</a></router-link>
                        <li v-bind:class="{active:$selected == 3}">
                            <!--  <router-link to="/contato"><a herf="#">{{$t('contato')}}</a></router-link> -->
                           <a herf="#" class="hands" @click="scroll('#contato')"
                              :style="{'color':this.params[$selected].cores[4]}"
                           >{{$t('contato')}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Canvas
                :slogan="$t('inicio')[$selected].slogan"
                :msg="$t('inicio')[$selected].msg"
                :shapeColors=this.params[$selected].cores
                :login=this.$selected
        />
        <div id="app">
            <router-view/>
        </div>
        <Contato id="contato" class="pt-lg"></Contato>
        <Footer></Footer>
        <a href="#" class="go-top"><i class="fa fa-angle-up"></i></a>

    </div>
</template>

<script>
    import Canvas from "@/components/Canvas";
    import i18n from '@/plugins/i18n';
    import CountryFlag from 'vue-country-flag';
    import VueScrollTo from 'vue-scrollto'
    import Contato from "@/components/Contato";

    export default {
        name: 'App',
        components: {
            Contato,
            Canvas,
            CountryFlag
        },
        data() {
            return {
                languages: [
                    {flag: 'us', language: 'en', title: 'English'},
                    {flag: 'br', language: 'pt-br', title: 'Português'}
                ],
                params: [
                    {
                        id_: 1,
                       /* cores: ['black', '#00d67e', '#de00ff', '#ff9c00']*/
                        cores: ['#FEE2C2', '#F37F80', '#68BFD0', '#F9C75A', '#33475B']
                    },
                    {
                        id_: 2,
                        /*cores: ['#007FB1', '#00b9d6', '#def1fc', '#00b9d6']*/
                        cores: ['#2CB0D0', '#a8abad', '#03adce', '#444444', 'white']
                    },
                    {
                        id_: 3,
                      /*  cores: ['#F14B17', '#ff584d', '#ffdcad', '#f1fa73']*/
                        cores: ['#FF6837', '#ff584d', '#ffdcad', '#444444', 'white' ]
                    },
                    {
                        id_: 4,
                        cores: ['black', '#00d67e', '#de00ff', '#ff9c00']
                    }
                ]
            }
        },
        watch: {
            '$route'(to, from) {
                console.log(from.meta);
                this.$selected = to.meta.sel;
            }
        },
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            },
            scroll(element) {
                VueScrollTo.scrollTo(element)
            }
        }


    }
</script>

<style>

    #menu {
        background-color: #FEE2C2;
    }

    .navbar-default .navbar-nav li a {

    }

    .navbar-default .navbar-nav li span a {

        padding-right: 0px !important;
        padding-left: 0px !important;
        margin-right: 0px !important;
        margin-left: 0px !important;
    }

    .router-link-active {
        color: white;
    }

    .language {
        position: fixed;
        right: 60px;
        z-index: 1200;
    } .btn-primary-outline {
              border-radius: 2px;
              background-color: #204d74;
              border: none;
              font-weight: 500;
              letter-spacing: 2px;
              color: #ffffff;
              text-transform: uppercase;
              margin-top: 30px;
              height: 50px;
              padding: 12px 12px;
      }

    .btn-primary-outline:hover {
        background-color: #7F8487;
        color: #ffffff;
    }
    .btn-primary-outline:active {
        background-color: #7F8487;
        color: #ffffff;
    }


    .language a {
        margin-left: -25px;
    }

    @media (min-width: 1200px) {
        .container {
            width: 90%;
        }
    }

    .hands {
        cursor: pointer;
    }

</style>




