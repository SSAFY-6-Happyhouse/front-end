<template>
    <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
         <!-- <v-col md="3" sm="6" cols="12" class>
            <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
                <span style="color: #1a73e8;">매물종류</span> </b> 
            </p>
         </v-col> -->
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">선호태그</span> </b> 
        </p>
        </v-col>
        <v-row>
            <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Segwons"
                label="마세권"
                value="1"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            <v-checkbox 
                v-model="Segwons"
                label="편세권"
                value="2"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Segwons"
                label="학세권"
                value="3"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            <v-checkbox 
                v-model="Segwons"
                label="역세권"
                value="4"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Segwons"
                label="문세권"
                value="5"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            <v-checkbox 
                v-model="Segwons"
                label="숲세권"
                value="6"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Segwons"
                label="주세권"
                value="7"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            <v-checkbox 
                v-model="Segwons"
                label="별세권"
                value="8"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="2"
            >
            <v-checkbox 
                v-model="Segwons"
                label="병세권"
                value="9"
                @click="addSegwons(value)"
            >
            </v-checkbox>
            
            </v-col>
        </v-row>
    </v-row>

    </v-container>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
    
    computed:{
        ...mapState(["Segwons"]),
    },

    data(){
        return {
            Segwon:'',
            Segwons:[],
        }
    },

    methods : {
       ...mapMutations(['setSegwon']),
       
       addSegwons(){
           //this.Segwons.push(value)
           this.setSegwon(this.Segwons);
       },

       
       
    }

}
</script>

<style>

</style>