<!--시 군 구 select box-->
<template>
    <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
        <v-btn @click="check_sido">클릭</v-btn>
        <v-col md="2" sm="2" cols="12" >
                <v-select v-model="sidoCode" :items="sidos" :item-value="sidos.sidoCode"
           @change="gugunList" ></v-select>
        </v-col>
         <v-col md="1" sm="2" cols="12" >  
                <p class="google-font mb-0" style="font-weight: 350;font-size:50%"><b>
                    <span style="color: #1a73e8;">시</span> </b> 
                </p>
         </v-col>
         <v-col md="2" sm="2" cols="12" >
            <v-select v-model="gugunCode" :items="guguns" :item-value="guguns.gugunCode" @change="dongList" ></v-select>
        </v-col>
         <v-col md="1" sm="2" cols="12" >
            <p class="google-font mb-0" style="font-weight: 350;font-size:50%"><b>
                <span style="color: #1a73e8;">구</span> </b> 
            </p>
        </v-col>    
         <v-col md="2" sm="2" cols="12" >  
            <v-select  v-model="dongCode" :items="dongs" :item-value="dongs.dongCode" @change="onChange_dong()" ></v-select>
        </v-col> 
         <v-col md="1" sm="2" cols="12" >   
            <p class="google-font mb-0" style="font-weight: 350;font-size:50%"><b>
                <span style="color: #1a73e8;">동</span> </b> 
            </p>
        </v-col>
    </v-row>
    
    </v-container>
</template>

<script>

import { mapState, mapActions, mapMutations } from "vuex";

export default {
    
    data() {
        return {
           sidoCode: null,
           gugunCode: null,
           dongCode: null,
           dongCodes :[],
        }
    },
    computed: {
    ...mapState(["sidos", "guguns", "dongs"]),
    // sidos() { 
    //   return this.$store.state.sidos;
    // },
    },
    created() {
        // this.$store.dispatch("getSido");
        // this.sidoList();
        this.CLEAR_SIDO_LIST();
        this.getSido();
    },
    methods : {
        ...mapActions(["getSido", "getGugun", "getDong"]),
        ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST","CLEAR_DONG_LIST","SET_DongCode"]),
        gugunList() {
            this.CLEAR_GUGUN_LIST();
            this.gugunCode=null;
            if (this.sidoCode) this.getGugun(this.sidoCode);
        },
        dongList() {
            this.CLEAR_DONG_LIST();
            this.dongCode=null;
            if (this.gugunCode) this.getDong(this.gugunCode);
        },
        onChange_dong() {
            this.dongCodes.push(this.dongCode)
            this.SET_DongCode(this.dongCodes);

        },

        check_sido(){
            this.guguns.forEach((gugun) => {
                console.log(gugun.value)
            })
        }
    }

}
</script>

<style>

</style>