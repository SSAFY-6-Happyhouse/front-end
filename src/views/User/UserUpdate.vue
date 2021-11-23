<template>
  <div class="userupdate">
    <v-row align="center">
          <v-col md="12" sm="12" cols="12">
              <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                  <span style="color: #1a73e8;">정보수정</span> </b> 
              </p>
          </v-col>
      </v-row>
  
    <v-card class="px-4">
      <v-card-text>
          <v-form v-model.lazy="valid">
              <v-row>
                  <v-col cols="12">
                      <v-text-field v-model="id" :rules="[rules.required]" label="id" maxlength="15" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                  </v-col>
                  <v-col>
                  <addressInfo/>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field v-model="phone" label="Phone" required></v-text-field>
                  </v-col>
                  
                  <v-col md="3" sm="6" cols="12" class>
                    <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
                      <span style="color: #1a73e8;">선호지역</span> </b> 
                    
                    </p>
                  </v-col>
                  <v-show Checking_count>
                  <v-col v-for= "idx in count" :key ="idx" cols="12">
                      <land disable/>
                      <v-button class="ma-2" @click="ChangeInfo">수정</v-button>
                  </v-col>
                  </v-show>
                  
                  <v-col cols="12">
                    <favoriteTag/>
                  </v-col>

                  <v-spacer></v-spacer>
                </v-row>
                <v-row>
                  <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                      <v-btn x-large block :disabled="!valid" color="success" @click="validate">Register</v-btn>
                  </v-col>
              </v-row>
          </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
// import {mapState} from '@/store/index'
export default {
  
  data (){
    return{
      favorite:[]
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
