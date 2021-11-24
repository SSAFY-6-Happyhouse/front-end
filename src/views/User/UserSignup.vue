<template>
<v-container fluid class="py-0">
      <v-row align="center">
          <v-col md="12" sm="12" cols="12">
              <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                  <span style="color: #1a73e8;">회원가입</span> </b> 
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
                    <v-button class="ma-2" @click="add_Count">추가</v-button>
                    </p>
                  </v-col>
                  
                  <v-col  v-for= "idx in count" :key ="idx" cols="12">
                      <land v-if="count<=3"></land>
                  </v-col>
                  
                  
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
</v-container>
</template>


<script>
import http from "@/utils/http-commons.js";
export default {
    components :{
         land:()=>import('@/components/input/DistrictInput'),
         favoriteTag:()=>import('@/components/input/SegwonTagInput'),
         addressInfo:()=>import('@/components/input/ZipcodeInput'),
    },
    data() {
        return {
        valid: true,
        count : 1,
        id: "",
        password: "",
        verify: "",
        phone: "",
        favorite_land :[],
        
        loginEmailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        
        show1: false,
        rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
        },
        
        }
    },
    computed:{
        
        methods : {
            passwordMatch() {
                return () => this.password === this.verify || "Password must match";
            },
            showData(){
                alert(this.count)
                return this.count
            },
            makeOption(){

            }
        }
       
    },

    methods :{
        CheckingCount() {
            alert(this.count)
            if(this.count > 3) {
              return false
            }
            else return true
        },
        add_Count(){
            this.count = this.count+1;
        },
        add: function(){
            this.favorite_land.push('land')
        },
        validate() {
            http.post("/user",{
                username : this.id,
                password : this.password,
                phone : this.phone,
            }).then((res) => {
                if(res.status === 201){
                    alert("회원가입이 완료되었습니다.")
                    this.$route.push("/")
                }
            });
            //  if (this.$refs.loginForm.validate()) {
            //     // submit form to server/API here...
                
            //  }
        },
        
    }
}
</script>


<style>

</style>