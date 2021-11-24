import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/realty/register",
    name: "Realty Register",
    component: () =>
      import("../views/Realty/RealtyRegister.vue"),  
  },
  {
    path: "/realty/update",
    name: "Realty Update",
    component: () =>
      import("../views/Realty/RealtyUpdate.vue"),  
  },
  {
    path: "/realty/delete",
    name: "Realty Delete",
    component: () =>
      import("../views/Realty/RealtyDelete.vue"),  
  },
  {
    path: "/realty/:id",
    name: "Realty Detail",
    component: () =>
      import("../views/Realty/RealtyDetail.vue"),
  },
  {
    path: "/user/mypage",
    name: "User Mypage",
    component: () =>
      import("../views/User/UserMypage.vue"),  
  },
  {
    path: "/user/signup",
    name: "User SignUp",
    component: () =>
      import("../views/User/UserSignup.vue"),  
  },
  {
    path: "/user/update",
    name: "User Update",
    component: () =>
      import("../views/User/UserUpdate.vue"),  
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
