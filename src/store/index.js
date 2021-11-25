import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import http from "@/utils/http-commons.js";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    userId: null,
    userName: null,
    token: null,
    relatyType: '',
    contractType : '',
    Segwons: [],
    Dates: [],
    sidos: [],
    guguns: [],
    dongs: [],
    keywords: [],
    prices: []
  },
  mutations: {
    setToken: (state, token) => (state.token = token),
    setUserId: (state, userId) => (state.userId = userId),
    setUserName: (state, userName) => (state.userName = userName),
    setDates: (state, Dates) => (state.Dates = Dates),
    setSegwon: (state, Segwons) => (state.Segwons = Segwons),
    setrelatyType: (state, relatyType) => (state.relatyType = relatyType),
    setcontractType: (state, contractType) => (state.contractType = contractType),
    setKeyWords : (state, keywords) => (state.keywords = keywords),
    Logout: (state) => (state.token = null),
    setPrices : (state ,prices) => (state.prices = prices),
    SET_SIDO_LIST: (state, sidos) => {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST: (state, guguns) => {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_DONG_LIST: (state, dongs) => {
      dongs.forEach((dong) => {
        state.dongs.push({ value: dong.dongCode, text: dong.dongName });
      });
    },
    CLEAR_SIDO_LIST: (state) => {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_GUGUN_LIST: (state) => {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_DONG_LIST: (state) => {
      state.dongs = [{ value: null, text: "선택하세요" }];
    },
    // SET_HOUSE_LIST: (state, houses) => {
    //   //   console.log(houses);
    //   state.houses = houses;
    // },
    // SET_DETAIL_HOUSE: (state, house) => {
    //   state.house = house;
    // },
  },
  actions: {
    async userConfirm({ commit }, user) { 
       await http.post("/user/signin", {
            username : user.username,
            password : user.password
          })
          .then((res) => {
            if(res.status === 200) {
              commit("setToken",res.data);
              commit("setUserName",user.username);
            }
          });
      //  .catch (error) {
      //   console.error(error);
      //   }
    },
    logout({commit}) {
      commit("Logout");
    }
  },
  modules: {},
  plugins:[
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage
    })
  ]
});
