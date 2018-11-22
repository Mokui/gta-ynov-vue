import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VuePouchDB from 'vue-pouch-db';
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)
Vue.use(BootstrapVue);
Vue.use(VuePouchDB);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
