import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: '',
    userName: '',
    token: ''
  },
  mutations: {
    setToken: (state, token) => (state.token = token),
    setUserId: (state, userId) => (state.userId = userId),
    setUserName: (state, userName) => (state.userName = userName),
  },
  actions: {
    login(){ 
      
    }
  },
  modules: {},
});
