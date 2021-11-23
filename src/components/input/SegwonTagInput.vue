<template>
    <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
         <!-- <v-col md="3" sm="6" cols="12" class>
            <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
                <span style="color: #1a73e8;">매물종류</span> </b> 
            </p>
         </v-col> -->
        <v-col md="2" sm="2" cols="6" >
            <input type="radio" v-model="relaty_type" value="1">역세권
        </v-col>
        <v-col md="2" sm="2" cols="6" >
            <input type="radio" v-model="relaty_type" value="2">학세권
        </v-col>
        <v-col md="2" sm="2" cols="6" >
            <input type="radio" v-model="relaty_type" value="3">편세권
        </v-col>
        <v-col md="2" sm="2" cols="6" >
            <input type="radio" v-model="relaty_type" value="4">숲세권
        </v-col>
        <v-col md="2" sm="2" cols="6" >
            <input type="radio" v-model="relaty_type" value="5">도세권
        </v-col>
        <v-col md="8" sm="2" cols="12" >
            <input type="radio" v-model="relaty_type" value="6">dur세권
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style>

</style>