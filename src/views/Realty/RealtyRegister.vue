<template>
  <div class="realtyregister">
    <v-row align="center">
        <v-col md="12" sm="12" cols="12">
            <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                <span style="color: #1a73e8;">매물 등록</span> </b> 
            </p>
        </v-col>
    </v-row>
 
    <v-card class="px-4">
    <v-card-text>
      <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="2" align-self="end"></v-col
          ><ContractType/>
      </v-row>
          
      <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="2" align-self="end"></v-col
          ><RealtyType/>
      </v-row>
      
      <v-row>
          <v-col cols="2"></v-col>
          주소         
          <v-col cols="2" align-self="end"></v-col
          ><ZipcodeInput/>
      </v-row>
      
      <v-row dense>
        <v-col md="4" col="12">
          층수 : <input v_model="floor" rules.required type="text"> 층
        </v-col>
        <v-col md="4" col="12">
          면적 : <input v_model="area" rules.required type="text"> 평
        </v-col>
        <v-col md="4" col="12">
          주차여부 : 
          <input type="radio" value=true v-model="park_possible" /> <label for=true>가능 </label>
          <input type="radio" value=false v-model="park_possible" /> <label for=false>불가능</label>
        </v-col>   
      </v-row>

      
      <!-- 입주 일자 -->
      <v-row>
        <DateInput/>
      </v-row>
      
      <!--가격 -->
      <!--Vuex을 이용해서 가격 처리 해주어야함 components으로 나누어놓아서 문제 발생 -->


      <!--옵션 -->
      <v-row dense>
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">옵션</span> </b> 
        </p>
        </v-col>
        <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Options"
                label="냉장고"
                value="1"
            >
            </v-checkbox>
            <v-checkbox 
                v-model="Options"
                label="세탁기"
                value="2"
            >
            </v-checkbox>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Options"
                label="전자레인지"
                value="3"
            >
            </v-checkbox>
            <v-checkbox 
                v-model="Options"
                label="에어컨"
                value="4"
            >
            </v-checkbox>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Options"
                label="도시 가스"
                value="5"
            >
            </v-checkbox>
            <v-checkbox 
                v-model="Options"
                label="청소기"
                value="6"
            >
            </v-checkbox>
          </v-col>
      </v-row>
      <!-- 이미지-->
      <v-row dense>
      <p class="google-font mb-0" style="font-weight: 350;font-size:100%"><b>
                <span style="color: #1a73e8;">대표이미지</span> </b> </p>
      <v-col cols="3"></v-col>
      <p class="google-font mb-0" style="font-weight: 350;font-size:100%"><b>
                <span style="color: #1a73e8;">세부이미지</span> </b> </p>
      </v-row>
      <v-row dense>
      <!-- <div class="w-32 h-32 border-2 border-dotted border-blue-500"> -->
      <div>
        <div v-if="Bestimage" class="w-full h-full flex items-center"><!--이미지가 있으면 바꾸어라 -->
          <img :src="Bestimage" alt="image">
        </div>
        <div v-else
            class="w-full h-full flex items-center justify-center cursor-pointer hover:bg-pink-100"
            @click="clickInputTag()">
            <input ref="image" id="input"
                    type="file" name="image" accept="image/*" multiple="multiple"
                    class="hidden"
                    @change="uploadImage()">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
      </div>
      <div class="container mx-auto text-sm">
        <div class="grid grid-cols-2 gap-2">
        <v-row dense>
          <v-col v-for="num in 4" :key="num" class="flex justify-center text-center" col="12" md ="2">
            <div class="w-32 h-32 mb-4 border-2 border-dotted border-blue-500">
              <div v-if="images[num]" class="w-full h-full flex items-center justify-center"
                  @mouseenter="showImageMenu(num, true)"
                  @mouseleave="showImageMenu(num, false)">
                <img :src="images[num]" :alt="`image${num}`">
                <div v-if="show[num]" class="absolute">
                  <div class="h-8 w-8 flex justify-center items-center rounded-full bg-blue-500"
                      @click="removeImage(num)">
                    <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                </div>
              </div>
              <div v-else class="w-full h-full flex items-center justify-center cursor-pointer hover:bg-pink-100"
                  @click="clickInputTag(num)"
                  @drop.prevent="dropInputTag(num, $event)"
                  @dragover.prevent>
                <input :ref="`image${num}`"
                      type="file" name="image" accept="image/*" multiple="multiple"
                      class="hidden"
                      @change="uploadImage(num)">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </v-col>
        </v-row>
        </div>
      </div>
    </v-row>
    

     <p class="google-font mb-0" style="font-weight: 350;font-size:100%"><b>
      <span style="color: #1a73e8;">상세설명</span> 
        </b> 
    </p>
    <v-textarea v-model="desc">
    </v-textarea>
    </v-card-text>

    <v-spacer></v-spacer>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="blue darken-1"
        text
      >
        <router-link to="/">제출</router-link>
      </v-btn>
      <v-btn
        color="blue darken-1"
        text
      >
        <router-link to="/">취소</router-link>
      </v-btn>
    </v-card-actions>
    </v-card>    
  </div>
</template>

<script>
//import axios from 'axios'
import ContractType from '@/components/input/ContractTypeInput'
import RealtyType from '@/components/input/RealtyTypeInput'
import ZipcodeInput from '@/components/input/ZipcodeInput'
import DateInput from '@/components/input/DateInput'
export default {

  components:{
    ContractType,
    RealtyType,
    ZipcodeInput,
    DateInput
  },
  data: ()=>({
    Bestimage: '',
    realtyName: '',
    rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      },
    floor:'1',
    area: '',
    park_possible : false,
    images : [],
    Options: [],
    desc : '안녕하세요'
  }),
  methods: {
    // uploadImage: function() {
    //   let form = new FormData()
    //   let image = this.$refs['image'].files[0]
      
    //   form.append('image', image)
 
    //   axios.post('/upload', form, {
    //       header: { 'Content-Type': 'multipart/form-data' }
    //   }).then( ({data}) => {
    //     this.images = data
    //   })
    //   .catch( err => console.log(err))
    // },
    clickInputTag: function() {
      this.$refs['image'].click()
    },
    dropInputTag: function(num, event) {
      //let file = Array.from(event.dataTransfer.files, v => v)
      //this.uploadImage(num, file)
      console.log(num)
      console.log(event)
    },
    removeImage: function(num) {
      this.images.splice(num, 1, null)
    },
    showImageMenu: function(num, bool) {
      this.$set(this.show, num, bool)
    },
  }
}
</script>

<style>
  input[type="text"] { border: solid 2px; border-radius: 8px; }
</style>