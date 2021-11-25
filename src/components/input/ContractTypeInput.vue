<template>
<v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">거래종류</span> </b> 
        </p>
        </v-col>
         <v-col md="2" sm="2" cols="12" >  
                <input type="radio"  value="MONTHLYRENT" v-model="ContractType" @click="makeContract">월세
         </v-col>
         <v-col md="2" sm="2" cols="12" >
                <input type="radio" value="LONGTERMRENT" v-model="ContractType" @click="makeContract">전세
        </v-col>    
        <v-col md="2" sm="2" cols="12" >
                <input type="radio" value="SALE" v-model="ContractType" @click="makeContract">매매
        </v-col>    
    </v-row>
</v-container>
</template>


<script>
import {mapState,mapMutations} from "vuex";
export default {
    data() {
        return {
            ContractType: null
        }
    },
    computed:{
        ...mapState(["ContractType"]),
    },
    methods : {
        ...mapMutations(["setcontractType"]),
        makeContract(){
            this.setcontractType(this.ContractType)
        }
    }

}
</script>

<style>

</style>