import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    userName: null,
    token: null
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
  plugins:[
    createPersistedState()
  ]
});
