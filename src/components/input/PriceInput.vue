<template>
    <v-container>
      <v-row class="fill-height">
         <v-col md="3" sm="6" cols="12" class>
         <p class="google-font mb-0" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">가격</span> </b> 
        </p>
        </v-col>
           
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-text-field
          v-model="minPrice"
          label="최소값"
          outlined
        ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          sm="1"
          md="1"
        > ~ </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
          v-model="maxPrice"
          label="최대값"
          outlined
        ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    
</template>

<script>
export default {
    data(){
        return{
            minPrice : 0,
            maxPrice : 0,
            Prices : {
              minPrice:this.minPrice,
              maxPrice:this.maxPrice 
            }
        }
    },
}
</script>