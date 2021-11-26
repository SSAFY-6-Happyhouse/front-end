<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        매물 검색
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">지역</span> </b> 
        </p>
        </v-col>
        <District/>
        <Contract/>
        <RealtyType/>
        <SegwonTag/>
        <Price/>
        <KeyWordSearchOne/>
        <DateForm/>
        
        
        
        <!-- <Map/> -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import {mapState} from "vuex"
export default {
    
    computed :{
      ...mapState(['contract'])
    },
    name: "SearchToggle",
    
    components :{
      District : ()=>import('@/components/input/DistrictInput'),
      Contract : ()=>import('@/components/input/ContractTypeInput'),
      RealtyType : ()=>import('@/components/input/RealtyTypeInput'),
      SegwonTag : ()=>import('@/components/input/SegwonTagInput'),
      DateForm : ()=>import('@/components/input/DateInput'),
      Price : ()=>import('@/components/input/PriceInput'),
      KeyWordSearchOne : () =>import('@/components/input/KeywordInput')
    },

    data() {
      return {
        ContractType :""
        };
    },

    methods : {
        setContractType(value){
          console.log(value)
          this.ContractType = value;
          //alert(this.ContractType)
          //console.log(this.ContractType)
          
        }
    }
}
</script>