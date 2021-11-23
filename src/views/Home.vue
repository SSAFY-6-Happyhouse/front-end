<template>
  <v-content class="px-0 mx-0 pt-3">
    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <SearchToggle />
        <recommendToggle />
        <router-link to="/realty/register">매물 등록</router-link>
      </v-row>
    </v-container>
  
  </v-content>
    
</template>

<script>
import SearchToggle from "@/components/search/SearchToggle.vue"
import recommendToggle from "@/components/recommend/recommendToggle.vue"
export default {
  name: "Home",

  components: {
    SearchToggle,
    recommendToggle
  },
};
</script>
