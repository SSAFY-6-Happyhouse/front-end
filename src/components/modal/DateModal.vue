<template>
    <!-- <v-dialog persistent max-width="600px"> -->
    <v-card>
        <v-card-title>
          <span class="text-h5">가능한 날짜 선택 </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" md ="4">
                <v-date-picker 
                    v-model="dates"
                    range
                >
                </v-date-picker>
              </v-col>
            </v-row>
        </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    <!-- </v-dialog> -->
</template>

<script>
export default {
    
    props:{
        show : Boolean
    },

    data(){
        return {
            dates : []
        }
    },
    
    methods: {
        showShow(){
            console.log(this.show)
        }
    },
}
</script>
