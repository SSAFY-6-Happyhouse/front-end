<template>
<!-- ContractType의 값에 따라서 다르게 만들어야 하기 때문에 변환 시켜준다.  -->
<!-- ContractType의 값을 가져와서 비교해주어야함 --> 
    <v-container>
      <v-row dense>
         <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">가격</span> </b> 
        </p>
        </v-col>
        <div v-if="contractType == '0'">
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-text-field
          v-model="savePrice"
          label="보증금"
          outlined
        ></v-text-field>/
        <v-text-field
          v-model="monthPrice"
          label="월세"
          outlined
        ></v-text-field>
        </v-col>
        </div>

        <div v-else-if="contractType == '1'">
          <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-text-field
          v-model="FullPrice"
          label="전세금"
          outlined
        ></v-text-field>
          </v-col>
        </div>

        <div v-else-if="contractType == '2'">
          <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-text-field
          v-model="SellPrice"
          label="매매금"
          outlined
        ></v-text-field>
          </v-col>
        </div>

        <div v-else>
           <v-col
          cols="12"
          sm="6"
          md="3"
        >
          거래종류를 선택해주세요!
           </v-col>
        </div>

        <v-btn @click="MakePrices">검색</v-btn>
      </v-row>
    </v-container>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {

    data(){
        return{
            savePrice : '',
            monthPrice : '',
            FullPrice: '',
            SellPrice : '',
            Prices : [
              {
                savePrice : this.savePrice,
                monthPrice : this.monthPrice,
                FullPrice : this.FullPrice,
                SellPrice : this.SellPrice 
              }
            ]
            
        }
    },

    computed: {
      ...mapState(['contractType'])
    },

    methods: {
      ...mapMutations(['setPrices']),
      MakePrices(){
         this.setPrices(this.Prices)
      }
    },

}
</script>