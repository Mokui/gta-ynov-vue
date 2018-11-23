import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VuePouchDB from "vue-pouch-db";
import VueGoogleCharts from "vue-google-charts";
import DaySpanVuetify from "dayspan-vuetify";

import "../node_modules/vuetify/dist/vuetify.min.css";
import "../node_modules/material-design-icons-iconfont/dist/material-design-icons.css";
import "../node_modules/dayspan-vuetify/dist/lib/dayspan-vuetify.min.css";
window.Vue = Vue;

Vue.use(VueGoogleCharts);
Vue.use(BootstrapVue);
Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  // options is vue definition, the resulting reactive component is stored in components as this.$dayspan or Vue.$dayspan
  data: {
    // data or computed to override
  },
  computed: {
    // data or computed to override
  },
  methods: {
    // methods to override
  }
});
Vue.use(VuePouchDB);
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  next(vm => {
    // access to component instance via `vm`
    if (
      vm.$store.getters.user_connected.id_user == null ||
      vm.$store.getters.user_connected.id_user == undefined
    ) {
      next("/");
    }
  })
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
