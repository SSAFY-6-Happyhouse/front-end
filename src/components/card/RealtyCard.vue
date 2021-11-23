<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title><router-link to="/realty/:id">buildingName</router-link></v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
         price(만 원)
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-chip-group >
        <v-chip v-for = "(item,index) in items" :key="index">
            #{{item}}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      items:['1','2','3','4','5']
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>