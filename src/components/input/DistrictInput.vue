<!--시 군 구 select box-->
<template>
    <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
        <v-col md="2" sm="2" cols="12" >
                <v-select :v-model="sidoCode" :options="sidos" @change="gugunList" ></v-select>
        </v-col>
         <v-col md="1" sm="2" cols="12" >  
                <p class="google-font mb-0" style="font-weight: 350;font-size:50%"><b>
                    <span style="color: #1a73e8;">시</span> </b> 
                </p>
         </v-col>
         <v-col md="2" sm="2" cols="12" >
            <v-select v-model="gugunCode" :options="guguns" @change="dongList" ></v-select>
        </v-col>
         <v-col md="1" sm="2" cols="12" >
            <p class="google-font mb-0" style="font-weight: 350;font-size:50%"><b>
                <span style="color: #1a73e8;">구</span> </b> 
            </p>
        </v-col>    
         <v-col md="2" sm="2" cols="12" >  
            <v-select  v-model="dongCode" :options="dongs" @change="onChange_dong($event)" ></v-select>
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
        }
    },
    computed: {
    ...mapState(["sidos", "guguns","dongs"]),
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
        ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST","CLEAR_DONG_LIST"]),
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
        onChange_dong(event) {
            console.log(event.target.value)
        },
    }

}
</script>

<style>

</style>