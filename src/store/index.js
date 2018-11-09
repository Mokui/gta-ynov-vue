import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  user_connected: {
    "id_user": 0,
    "name": "",
    "firstname": "",
    "birth": "",
    "adress": "",
    "phone": "",
    "email": "",
    "congRestants": 0,
    "dayHours": 0,
    "missingDays": 0
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})