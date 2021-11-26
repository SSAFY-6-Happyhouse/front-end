<template>
  <div class="usermypage">
   <v-container fluid class="py-0">
      <v-row align="center">
          <v-col md="12" sm="12" cols="12">
              <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                  <span style="color: #1a73e8;">마이페이지</span> </b> 
              </p>
          </v-col>
      </v-row>
  
    <v-card class="px-4">
      <v-card-text>
          
          <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">아이디</v-col
              >
              <router-link to="/user/update"> 정보수정</router-link>
              <button href="#">회원탈퇴</button>
              <!-- <v-col cols="4" align-self="start">{{ userInfo.userid }}</v-col>
              <v-col cols="2"></v-col> -->
          </v-row>

          <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">이름</v-col
              ><!-- <v-col cols="4" align-self="start">{{ userInfo.userid }}</v-col>
              <v-col cols="2"></v-col> -->
          </v-row>
          
          <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">전화번호</v-col
              ><!-- <v-col cols="4" align-self="start">{{ userInfo.userid }}</v-col>
              <v-col cols="2"></v-col> -->
          </v-row>

          <v-row>
            <v-col cols="2"></v-col>
             <v-col cols="2" align-self="end">
              <button @click="Myregister">내 등록매물</button> 
            </v-col>
            <v-col cols="2">|</v-col>
            <v-col cols="2" align-self="end">
              <button @click.native="MyGim">내 찜매물</button>
            </v-col>
            <v-col cols="2">|</v-col>
            <v-col cols="2" align-self="start">
              <button @click.native="MyFavorite">내 관심매물</button>
           </v-col>
          </v-row>
          
          <v-row>
            안녕하세요<br>
            등록한 물건 있습니다<br>
          </v-row>

          <v-row v-if="myregisterVisible">
            안녕하세요<br>
            등록한 물건 있습니다<br>
          </v-row>
          

          <v-spacer></v-spacer>
          
      </v-card-text>
      <!--방향 이동해준다. -->
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="6"
        ></v-pagination>
      </div>
    </v-card> 
  </v-container>
</div>
</template>


<script>

//import { mapState , mapActions} from "vuex";

export default {
    // components :{
    //     //  land:()=>import('@/components/input/DistrictInput'),
    //     //  favoriteTag:()=>import('@/components/input/SegwonTagInput'),
    //     //  addressInfo:()=>import('@/components/input/ZipcodeInput'),
    // },
    data() {
        return {
    //     valid: true,
    //     count : 1,
    //     id: "",
    //     password: "",
    //     verify: "",
    //     phone: "",
    //     favorite_land :[],
        
    //     loginEmailRules: [
    //     v => !!v || "Required",
    //     v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    //     ],
        
    //     show1: false,
    //     rules: {
    //     required: value => !!value || "Required.",
    //     min: v => (v && v.length >= 8) || "Min 8 characters"
    //     },
           myregisterVisible: true,
           myGimVisible: false,
           myFavoriteVisible : false,
           page: 1,
        }
    },
    computed:{
        //...mapState(memberStore, ["userInfo"]),
        // methods : {
        //     passwordMatch() {
        //         return () => this.password === this.verify || "Password must match";
        //     },
        //     showData(){
        //         alert(this.count)
        //         return this.count
        //     },
        //     makeOption(){

        //     }
        // }
         
    },

    methods :{
       Myregister(){
          console.log("hello")
          this.myregisterVisible = true
          this.myGimVisible = false
          this.myFavoriteVisible = false
        },
        MyGim(){
          this.myregisterVisible =  false
          this.myGimVisible = true
          this.myFavoriteVisible = false
        },
        MyFavorite(){
          this.myregisterVisible =  false
          this.myGimVisible = false
          this.myFavoriteVisible = true
        }
    }
}

