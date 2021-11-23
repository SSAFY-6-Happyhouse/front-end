<template>
<v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
        <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">거래종류</span> </b> 
        </p>
        </v-col>
         <v-col md="2" sm="2" cols="12" >  
                <input type="radio" v-model="sale_type" value="0">월세
         </v-col>
         <v-col md="2" sm="2" cols="12" >
                <input type="radio" v-model="sale_type" value="1">전세
        </v-col>    
        <v-col md="2" sm="2" cols="12" >
                <input type="radio" v-model="sale_type" value="2">매매
        </v-col>    
    </v-row>
</v-container>
</template>


<script>
export default {
    
    data() {
        return {
            Contract_type:""
        }
    },

    methods : {
        
    }

}
</script>

<style>

</style>