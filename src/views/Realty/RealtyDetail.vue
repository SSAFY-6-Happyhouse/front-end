<template>  
<div class="usermypage">
   <v-container fluid class="py-0">
      <v-row align="center">
          <v-col md="12" sm="12" cols="12">
              <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                  <span style="color: #1a73e8;">매물상세</span> </b> 
              </p>
          </v-col>
      </v-row>
  
    <v-card class="px-4">
      <v-card-text>
        <v-row dense>
          <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">대표이미지</span> </b> 
          </p>
          </v-col>
          <v-col md ="4" cols="12">
          <v-img
            height="250"
            width="350"
            :src="BestImg"
          >
          </v-img>
          </v-col>
         
          <router-link to="/realty/update">매물정보수정</router-link><v-col cols="2"></v-col>
          <router-link to="/realty/delete">삭제</router-link>
          <v-col cols="2"></v-col>
              <!-- <v-col cols="4" align-self="start">{{ userInfo.userid }}</v-col>
              <v-col cols="2"></v-col> -->
        </v-row>

        <v-row>
          <v-col cols="4"></v-col>
          <v-btn class="ma-2" outlined color="indigo" @click="showPhone()">
            연락처 문의
          </v-btn><v-col cols="1"></v-col>
          <v-btn class="ma-2" outlined color="indigo" @click="addReport()">
            신고
          </v-btn><v-col cols="1"></v-col>
          <v-btn class="mx-2" fab dark color="pink" @click="addGim()">
            <v-icon dark>
              mdi-heart
            </v-icon>
          </v-btn>
        </v-row>
        
        <v-data-table
          :headers="headers"
          :items="contents"
          :items-per-page="all"
          class="elevation-1"
        ></v-data-table>
        <br>
        <br>
          <!-- <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">거래종류</v-col>
               <v-col cols="4" align-self="start">{{ContractType}}</v-col>
              <v-col cols="2"></v-col>
          </v-row>
          
          <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">매물종류</v-col>
               <v-col cols="4" align-self="start">{{RealtyType}}</v-col>
              <v-col cols="2"></v-col>
          </v-row> -->
      
      <v-row>
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">입주가능일</span> </b> 
        </p>
        </v-col>
        <v-col cols="2"></v-col>
        <input v-model="date" readonly>
      </v-row>
      
      <!--가격 -->
      <!--Vuex을 이용해서 가격 처리 해주어야함 components으로 나누어놓아서 문제 발생 -->

      <br>
      <!--옵션 -->
      <v-row dense>
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">옵션</span> </b> 
        </p>
        </v-col>
        <div class="styled__Img-fhj1a6-0 fowQCQ"></div>
        <p>에어컨</p>
      </v-row>

      <v-row>
      <p class="google-font mb-0" style="font-weight: 350;font-size:100%"><b>
      <span style="color: #1a73e8;">상세 사진</span> 
        </b> 
      </p>
       <div v-for="(item,idx) in items" :key="idx">
         <img src="item">
       </div>
      </v-row>

      <br>
      <p class="google-font mb-0" style="font-weight: 350;font-size:100%"><b>
      <span style="color: #1a73e8;">상세설명</span> 
        </b> 
      </p>
      <v-textarea v-model="desc">
      </v-textarea>
         
          
      </v-card-text>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="blue darken-1"
        text
        @click="moveRoot"
      >
        확인
      </v-btn>
      <v-btn
        color="blue darken-1"
        text
        @click="moveRoot"
      >
        취소
      </v-btn>
    </v-card-actions>
    </v-card> 
  </v-container>
</div>
</template>

<script>
export default {
  data(){
    return {
      BestImg:'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      RealtyType : '전세',
      ContractType : '아파트',
      GimCount:1,
      PhoneNumber : '010-1314-4566',
      ReportNumber : 1,
      date:'2021-11-24',
      headers: [
       {
       text: '조',
       align: 'start',
       sortable: false,
       value: 'name',
       },
       { text: '12/21 월', value: 'mon' },
       { text: '12/22 화', value: 'tue' },
       { text: '12/23 수', value: 'wed' },
       { text: '12/24 목', value: 'tur' },
       { text: '12/25 금', value: 'fri' },
       { text: '12/26 토', value: 'sat' },
       { text: '12/27 일', value: 'sun' },
       { text: '%', value: 'percent' },
       ],
       contents: [
          {
			name:'1조',
            mon: '94.7%',
            tue: '-',
            wed: '-',
            tur: '-',
            fri: '-',
            sat: '-',
			sun: '-',
			percent:'94.7%',
          },
          {
			name:'2조',
            mon: '-',
            tue: '92.3%',
            wed: '-',
            tur: '-',
            fri: '-',
            sat: '-',
			sun: '-',
			percent:'92.3%',
          },
          {
			name:'3조',
            mon: '91.9%',
            tue: '90.3%',
            wed: '-',
            tur: '-',
            fri: '-',
            sat: '-',
			sun: '-',
			percent:'91.1%',
          },
          {
			name:'4조',
            mon: '100.0%',
            tue: '96.4%',
            wed: '-',
            tur: '-',
            fri: '-',
            sat: '-',
			sun: '-',
			percent:'98.4%',
          },
          {
			name:'평균',
            mon: '95.9%',
            tue: '92.8%',
            wed: '-',
            tur: '-',
            fri: '-',
            sat: '-',
			sun: '-',
			percent:'94.3%',
	  	},
    ],

    }
  },

  methods : {
    addGim(){
      this.GimCount = this.GimCount+1
      alert(this.GimCount)
    },
    showPhone(){
      alert(this.PhoneNumber)
    },
    addReport(){
      alert(this.ReportNumber)
    },
    moveRoot(){
        this.$router.push("/")
    }
  }

}
</script>

<style>
  /* button {
    border:1px solid black;
    background-color : yellow;
  } */
</style>