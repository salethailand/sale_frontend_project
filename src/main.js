import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Argon from "./plugins/argon-kit";
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import VueCarousel from 'vue-carousel';
import './registerServiceWorker'

import VueTableRowEdit from 'vue-table-row-edit'
import 'vue-table-row-edit/dist/vue-table-row-edit.min.css'

// Vue.use(ElementUI)
Vue.use(VueTableRowEdit)

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import { ClientTable, Event } from "vue-tables-2";
Vue.use(ClientTable);

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false
Vue.use(Argon);
Vue.use(VueCarousel);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCPRsc0UbilPKykFa5UViNWG0Z7h5YCZ-4",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
