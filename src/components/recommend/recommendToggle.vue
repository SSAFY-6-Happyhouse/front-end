<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        매물 추천
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-col v-for="i in 5" :key="i">
          {{i}}번째<RealtyCard/>
        </v-col>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>

export default{ 
  components :{
    RealtyCard : ()=> import('@/components/card/RealtyCard')
  }
}
</script>