<template>
  <div class="userupdate">
    <v-row align="center">
          <v-col md="12" sm="12" cols="12">
              <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                  <span style="color: #1a73e8;">회원 정보 수정</span> </b> 
              </p>
          </v-col>
      </v-row>
  
    <v-card class="px-4">
      <v-card-text>
        <v-row dense>
          <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">아이디</v-col
              ><input v-model="id" readonly :rules="[rules.required]" label="id" maxlength="15" required>
        </v-row>
        <v-row dense>
          <v-col cols="2"></v-col>
          <v-col cols="2" align-self="end">주소</v-col>
                <addressInfo/>
        </v-row>
        <v-row dense>
          <v-col cols="2"></v-col>
          <v-col cols="2" align-self="end">전화번호</v-col>
                <input v-model="phone" label="Phone">
        </v-row>
       <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="2" align-self="end">선호지역</v-col>
                <div v-for= "(land,i) in lands" :key="i" :id="i">
                  <select value="land.sido" disabled></select> 시
                  <select value="land.gugun" disabled></select>구
                  <select value="land.dong" disabled></select> 동
                  <button @click="ChangeInfo">수정</button>
                </div>
          
       </v-row>
       <v-row dense>
          <v-col cols="2"></v-col>
          <v-col cols="2" align-self="end">선호세권</v-col>
                <favoriteTag/>
       </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
// import {mapState} from '@/store/index'
export default {
  
  components :{
    addressInfo : ()=>import('@/components/input/ZipcodeInput'),
    favoriteTag : ()=>import('@/components/input/SegwonTagInput')
  },

  data (){
    return{
      id:"hello",
      phone : "011-4565-9123",
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      },
      lands :
      [
      {
        "sido" : "서울",
        "gugun" : "마포구",
        "dong": "합정동"
      },
      {
        "sido" : "서울",
        "gugun" : "양천구",
        "dong": "목동"
      }
      ]
    }
  },
  computed :{
    // ...mapState['']
  },

  methods :{
    ChangeInfo(){

    }
  }
}
</script>
