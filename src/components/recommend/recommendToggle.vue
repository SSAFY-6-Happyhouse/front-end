<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        매물 추천
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row dense>
        <v-col v-for="i in 5" :key="i"  col="12" md="2">
          {{i}}번째<RealtyCard/>
        </v-col>
        </v-row>
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