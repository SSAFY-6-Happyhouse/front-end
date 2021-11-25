<template>
  <v-row class="fill-height">
    <v-col md="4" sm="4" cols="12" class>
         <p class="google-font mb-1" style="font-weight: 500;font-size:100%"><b>
            <span style="color: #1a73e8;">입주가능일</span> </b> 
            <button @click="showdataRangeText">체크</button> 
        </p>
        <!-- <v-if = > -->
    </v-col>    
    <v-col
      cols="12"
      sm="4"
      md ="4"
    > <v-text-field
        v-model="dateRangeText"
        label="Date range"
        prepend-icon="mdi-calendar"
        readonly
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      sm="4"
      md ="4"
    >
    <v-date-picker
        v-model="date"
        width="200"
        no-title
        :allowed-dates="allowedDates"
        height ="90"
        class="mt-4"
        range
    >
    </v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
    data: () => ({
      date: '',
      show : false
    }),
    computed: {
       ...mapState(["Dates"]),
    },

    created :{
      leadingZeros(n, digits) {
	    var zero = '';
	    n = n.toString();

	    if (n.length < digits) {
	        for (var i = 0; i < digits - n.length; i++)
	            zero += '0';
	    }
	    return zero + n;
	    },
    },
    methods : {
       ...mapMutations(["setDates"]),
      handleClickModalSwitch(){
          // alert(this.show)
          this.show = !this.show
      },
      
      allowedDates(){
        var now = new Date();
        if(this.date){
          now = 
            this.leadingZeros(now.getFullYear(), 4) + '-' +
            this.leadingZeros(now.getMonth() + 1, 2) + '-' +
            this.leadingZeros(now.getDate(), 2);
          if(this.date>now){
              this.setDates(this.date);
          }
        }

      },
      
      
      
    }

  }
</script>