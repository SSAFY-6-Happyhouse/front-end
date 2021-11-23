<template>
  <v-card>
    <v-container fluid>
      <v-row>
        <v-col md="4" sm="4" cols="12" class>
            <span style="color: #1a73e8;">키워드 검색 </span> 
        </v-col>    
     <v-col cols="12">
          <input v-model="keyword" border="1">
          <button @click="search">검색</button>
    </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      keyword : '',
      keywords: [],
    }),

    methods : {
        search(){
            this.keywords.push(this.keyword)
        }
    }

  }
</script>

<style>
.v-input{
      width: 250px;
}
</style>