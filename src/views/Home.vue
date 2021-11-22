<template>
  <v-content class="px-0 mx-0 pt-3">
    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <SearchToggle />
      </v-row>
    </v-container>
  
  </v-content>
    
</template>

<script>
import SearchToggle from "../components/search/SearchToggle.vue"
export default {
  name: "Home",

  components: {
    SearchToggle,
  },
};
</script>
