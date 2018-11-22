import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_connected: {}
  },
  actions,
  mutations: {
    user_connected(state, user) {
      for (const element in user) {
        state.user_connected[element] = user[element];
      }
    }
  },
  getters: {
    user_connected: state => state.user_connected
  }
});
