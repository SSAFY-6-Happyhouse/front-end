<template>
<v-container fluid class="py-0">
    <v-row dense>
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">거래종류</span> </b> 
        </p>
        </v-col>
        <v-radio-group v-model="ContractType">
         <v-col md="2" sm="2" cols="12" >  
                <v-radio  :value="0" label="월세" @click="makeContract"></v-radio>
         </v-col>
         <v-col md="2" sm="2" cols="12" >
                <v-radio :value="1" label="전세" @click="makeContract"></v-radio>
        </v-col>    
        <v-col md="2" sm="2" cols="12" >
                <v-radio :value="2" label="매매" @click="makeContract"></v-radio>
        </v-col>
        </v-radio-group>    
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