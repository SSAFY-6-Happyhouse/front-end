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
    realtyType: null,
    contractType : '',
    Segwons: [],
    Dates: [],
    sidos: [],
    guguns: [],
    dongs: [],
    dongCodes:[],
    keywords: [],
    prices: [],
    addr1 :'',//시구동
    addr2 :'', //상세주소
    zip : '',
    realty : null,//매물 넣어주기
    memeberinfo : null
  },
  mutations: {
    setToken: (state, token) => (state.token = token),
    setUserId: (state, userId) => (state.userId = userId),
    setUserName: (state, userName) => (state.userName = userName),
    setDates: (state, Dates) => (state.Dates = Dates),
    setSegwon: (state, Segwons) => (state.Segwons = Segwons),
    setrealtyType: (state, realtyType) => (state.realtyType = realtyType),
    setcontractType: (state, contractType) => (state.contractType = contractType),
    setKeyWords : (state, keywords) => (state.keywords = keywords),
    Logout: (state) => (state.token = null),
    setPrices : (state ,prices) => (state.prices = prices),
    setAddr1 : (state,addr1) => (state.addr1 = addr1),
    setAddr2 : (state,addr2) => (state.addr2 = addr2),
    setZip : (state,zip) => (state.zip = zip),
    SET_Realty : (state,realty) => (state.realty = realty),
    SET_DongCode: (state,dongCodes) => (state.dongCodes = dongCodes),
    RegisterInfo : (state) => (state.memeberinfo=null),
    SET_SIDO_LIST: (state, sidos) => {
      sidos.forEach((sido) => {
        //console.log(sido.sidoCode)
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST: (state, guguns) => {
      guguns.forEach((gugun) => {
        console.log(gugun.gugunCode)
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_DONG_LIST: (state, dongs) => {
      dongs.forEach((dong) => {
        //console.log(dong.dongName)
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
    },
    getSido({commit}) {
       http.get("/district/sido")
       .then((res)=>{
         if(res.status === 200){
           commit("SET_SIDO_LIST",res.data);
         }
       })
       
    },
    getGugun({commit},sidoCode) {
      http.get('/district/gugun', { 
        params:{ 
          sido : sidoCode
        }
      })
      .then((res)=>{
        if(res.status === 200){
          commit("SET_GUGUN_LIST",res.data);
        }
      })
      
   },
   getDong({commit},gugunCode) {
    http.get('/district/dong', { 
      params:{ 
        gugun : gugunCode
      }
    })
    .then((res)=>{
      if(res.status === 200){
        commit("SET_DONG_LIST",res.data);
      }
    })
    
 },
    getRecommend(){
      http.get("`/realty/recommend" ,{headers : { 'Authorization' : 'Bearer '+ this.state.token}})
      .then((res)=>{
        console.log(res.data)
      })
    },
    setrelaty({commit},relaty){
        http.post("/realty",relaty,{headers : { 'Authorization' : 'Bearer '+ this.state.token}})
        .then((res) =>{
          if(res.status === 201){
            commit("SET_Realty",res.data)
          }
        })
        
    },
    setRegister({commit},Registerinfo) {
      alert(Registerinfo.password)
      http.post("/user/signup",
          Registerinfo
      ).then((res) => {
          if(res.status === 201){
              alert("회원가입이 완료되었습니다.")
              commit("RegisterInfo")
              this.$route.push("/")
          }
      });
    },
    // getinfo({commit},tokename){
    //   http.get("/user/")

    // }
  },
  modules: {},
  plugins:[
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage
    })
  ]
});
