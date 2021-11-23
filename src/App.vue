<template>
  <v-app>
  <v-app-bar app hide-on-scroll fixed clipped-left :class="this.$vuetify.theme.dark == true?'':'white'" :style="
      this.$vuetify.theme.dark ? {boxShadow:'0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #272727'}
      :{ boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0' }">
          <span class="group pa-2">
          <router-link to="/">
          <v-icon small>
            home
          </v-icon>
          </router-link>
          </span>

          <v-tabs right>
          </v-tabs>
          
          <!--로그인 작업 처리 -->
          <v-btn
          class="ma-2"
          elevation="2" @click="dialog = true"
          >로그인</v-btn>      

          <v-btn
          class="ma-2"
          elevation="2" router-link to="/user/signup"
          >회원가입</v-btn>

          <v-btn
          class="ma-2"
          elevation="2"
          >로그아웃</v-btn>      

          <v-btn
          class="ma-2"
          elevation="2" router-link to="/user/mypage"
          >마이페이지</v-btn>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <v-card>
        <v-card-title>
          <span class="text-h5">로그인</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="id"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          <v-row>
            <v-col>아이디가 없으십니까?? <router-link to="/user/signup"  @click="dialog = false">회원가입</router-link></v-col> 
          </v-row>
          <v-row>
            <v-col>아이디/비밀번호를 잊어버렸습니까?? 아이디/비밀번호 찾기</v-col> 
          </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Login
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
    dialog : false,
    //
  }),

  methods : {
    
  
  }
};
</script>
