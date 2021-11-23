<template>
    <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
         <v-col md="3" sm="6" cols="12" class>
            <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
                <span style="color: #1a73e8;">매물종류</span> </b> 
            </p>
         </v-col>
        <v-col md="2" sm="1" cols="12" >
            <input type="radio" v-model="relaty_type" value="0">아파트
        </v-col>
        <v-col md="2" sm="1" cols="12" >
            <input type="radio" v-model="relaty_type" value="1">오피스텔
        </v-col>
        <v-col md="2" sm="1" cols="12" >
            <input type="radio" v-model="relaty_type" value="2">빌라
        </v-col>
        <v-col md="2" sm="1" cols="12" >
            <input type="radio" v-model="relaty_type" value="3">단독주택
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
    
    data() {
        return {
            relaty_type:""
        }
    },

    methods : {
        
    }

}
</script>

<style>

</style>