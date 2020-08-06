<template>
  <div class="vue-template">
        <span class="language">
            <a class="tight" v-for="entry in languages" :key="entry.title" href="#"
               @click="changeLocale(entry.language)">
              <country-flag :country= "entry.flag" />
            </a>
        </span>
        <div class="navbar navbar-default navbar-static-top" id="menu" :style="{ backgroundColor: this.params[$selected].cores[0]}" ><div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="icon icon-bar"></span>
              <span class="icon icon-bar"></span>
              <span class="icon icon-bar"></span>
            </button>
            <a href="index.html" class="navbar-brand">
              <img v-show="$selected == 0" src="./assets/img/logo_scc4_sm_gray.png" height="35"/>
              <img v-show="$selected == 1" src="./assets/img/logo_portal_postal.png" height="35"/>
              <img v-show="$selected == 2" src="./assets/img/logo_boxcubo.png" height="35"/>
              <img v-show="$selected == 3" src="./assets/img/logo_scc4_sm_gray.png" height="35"/>
            </a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right linha">
              <li  v-bind:class="{active:$selected == 0}">
                <router-link to="/home"><a herf="#"  >Home</a></router-link>
              </li>
              <li  v-bind:class="{active:$selected == 1}">
                <router-link to="/portalpostal"><a herf="#" >Portal Postal</a></router-link>
              </li>
              <li v-bind:class="{active:$selected == 2}">
                <router-link to="/boxcubo"> <a herf="#" > Boxcubo</a></router-link>
              <li v-bind:class="{active:$selected == 3}">
                <router-link to="/contato"><a herf="#">{{$t('contato')}}</a></router-link>
              </li>
            </ul>
          </div>
    </div>
  </div>
      <Canvas
              :slogan =  "$t('inicio')[$selected].slogan"
              :msg =  "$t('inicio')[$selected].msg"
              :shapeColors = this.params[$selected].cores
              :login = this.$selected
      />
    <div id="app">
        <router-view />
  </div>

  </div>
</template>

<script>
import Canvas from "@/components/Canvas";
import i18n from '@/plugins/i18n';
import CountryFlag from 'vue-country-flag';

export default {
    name: 'App',
   components: {
    Canvas,
     CountryFlag
   },
    data() {
    return {
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'br', language: 'pt-br', title: 'Português' }
      ],
      params: [
        {
          id_:1,
          cores: ['black', '#00d67e', '#de00ff', '#ff9c00']
        },
        {
          id_:2,
          cores: ['#007FB1','#00b9d6', '#def1fc', '#00b9d6']
        },
        {
          id_:3,
          cores: ['#F14B17','#ff584d', '#ffdcad', '#f1fa73']
        },
        {
          id_:3,
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
      }
    }

  }
</script>

<style>

  #menu{
    background-color: black;
  }
  .navbar-default .navbar-nav li a {
    color: white;
  }
  .navbar-default .navbar-nav li span a {
    color: white;
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .router-link-active{
    color: white;
  }
  .btn-primary-outline {
    background-color: transparent;
    border-color: white;
    color: white;
    margin-top: 20px;
  }
  .btn-primary-outline:hover {
    background-color: #23527c;
    border-color: white;
    color: white;
    margin-top: 20px;
  }

  .language{
    position: fixed;
    right: 60px;
    z-index: 1200;
  }
  .language a{
    margin-left: -25px;
  }
  @media (min-width: 1200px){
    .container {
      width: 90%;
    }
  }

</style>




