<!--시 군 구 select box-->
<template>
    <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
        <v-col md="2" sm="2" cols="12" >
                <v-select :items="sidos" @change="onChange_sido($event)" ></v-select>
        </v-col>
         <v-col md="1" sm="2" cols="12" >  
                <p class="google-font mb-0" style="font-weight: 350;font-size:50%"><b>
                    <span style="color: #1a73e8;">시</span> </b> 
                </p>
         </v-col>
         <v-col md="2" sm="2" cols="12" >
            <v-select :items="guguns" @change="onChange_gugun($event)" ></v-select>
        </v-col>
         <v-col md="1" sm="2" cols="12" >
            <p class="google-font mb-0" style="font-weight: 350;font-size:50%"><b>
                <span style="color: #1a73e8;">구</span> </b> 
            </p>
        </v-col>    
         <v-col md="2" sm="2" cols="12" >  
            <v-select :items="dongs" @change="onChange_dong($event)" ></v-select>
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

export default {
    
    data() {
        return {
            sidos: ['서울','광주'],
            guguns : [],
            dongs : [],
        }
    },
    beforeCreate :{
      //시도 name, code 넣기
    },
    methods : {
        onChange_sido(event) {
            console.log(event.target.value)
        },
        onChange_gugun(event) {
            console.log(event.target.value)
        },
        onChange_dong(event) {
            console.log(event.target.value)
        },
    }

}
</script>

<style>

</style>