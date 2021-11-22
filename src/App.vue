<template>
  <v-app>
  <v-app-bar app hide-on-scroll fixed clipped-left :class="this.$vuetify.theme.dark == true?'':'white'" :style="
      this.$vuetify.theme.dark ? {boxShadow:'0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #272727'}
      :{ boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0' }">
          <span class="group pa-2">

          <v-icon small>home</v-icon>
          </span>

          <v-tabs right>
          </v-tabs>
          
          <!--로그인 작업 처리 -->
          <v-btn
          class="ma-2"
          elevation="2"
          >로그인</v-btn>      

          <v-btn
          class="ma-2"
          elevation="2"
          >로그아웃</v-btn>      

          <v-btn
          class="ma-2"
          elevation="2"
          >마이페이지</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    //
  }),
};
</script>
