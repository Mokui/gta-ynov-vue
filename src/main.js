import Vue from "vue";
import Vuetify from 'vuetify';
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(Vuetify);
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
