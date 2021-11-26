<template>
    <v-container fluid class="py-0">
    <v-row dense>
         <v-col md="3" sm="6" cols="12" class>
            <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
                <span style="color: #1a73e8;">매물종류</span> </b> 
            </p>
         </v-col>
         <v-radio-group v-model="relatyType" >
            <v-col md="2" sm="1" cols="12" @click="makerelatyType">
                <v-radio :value="0" label="아파트"></v-radio>
            </v-col>
            <v-col md="2" sm="1" cols="12" @click="makerelatyType">
                <v-radio :value="1" label="오피스텔"></v-radio>
            </v-col>
            <v-col md="2" sm="1" cols="12" @click="makerelatyType">
                <v-radio :value="2" label="빌라"></v-radio>
            </v-col>
            <v-col md="2" sm="1" cols="12" @click="makerelatyType">
                <v-radio :value="3" label="단독주택"></v-radio>
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
            relatyType:""
        }
    },

    computed :{
        ...mapState(["realtyType"])
    },
    methods : {
       ...mapMutations(["setrealtyType"]),

       makerelatyType(){
           this.setrealtyType(this.relatyType)
       }

    }

}
</script>

<style>

</style>