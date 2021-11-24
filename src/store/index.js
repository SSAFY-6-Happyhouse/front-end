import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    userName: null,
    token: null,
    relatyType: '',
    contractType : '',
    Segwons: [],
    dates: [],
    sidos: [],
    guguns: [],
    dongs: [],
    keywords : []
  },
  mutations: {
    setToken: (state, token) => (state.token = token),
    setUserId: (state, userId) => (state.userId = userId),
    setUserName: (state, userName) => (state.userName = userName),
    setDates: (state, dates) => (state.dates = dates),
    setSegwon: (state, Segwons) => (state.Segwons = Segwons),
    setrelatyType: (state, relatyType) => (state.relatyType = relatyType),
    setcontractType: (state, contractType) => (state.contractType = contractType),
    setKeyWords : (state, keywords) => (state.keywords = keywords)
  },
  actions: {
    login(){ 
      
    },
    getSidos() {
      
    }
  },
  modules: {},
  plugins:[
    createPersistedState()
  ]
});
