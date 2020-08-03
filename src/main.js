import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$selected = 0;
import router from '@/router/index'

/*import vuetify from '@/plugins/vuetify' // path to vuetify export*/
import axios from 'axios';
import VueAxios from 'vue-axios';
import i18n from '@/plugins/i18n';
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)


Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;



/*
new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
*/
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')