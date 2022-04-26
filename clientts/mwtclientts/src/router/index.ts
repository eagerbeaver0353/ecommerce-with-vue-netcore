import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import Signin from "@/components/Signin.vue";
import Dashboard from "@/views/HomeView.vue";
import Login from "@/components/Login.vue";
import CompanyDetails from "@/components/companyRegister.vue" ;
 import routes from "@/router/routes"
Vue.use(VueRouter);


// const routes: Array<RouteConfig> = [
//   {
//     path: "/",
//     name: "Signin",
//     component: Signin,
//   },
//   {
//     path: "/Dashboard",
//     name: "Dashboard",
//     component: Dashboard,
    
//   },
//   {
//     path: "/Signin",
//     name: "Signin",
//     component: Signin,
//   },
//   {
//     path: "/Signup",
//     name: "Signup",
//     component: () => import("../components/Signup.vue"),
//   },
//   {
//     path: "/profile",
//     name: "profile",

//     component: () => import("../components/profile.vue"),
//   },
//   {
//     path: "/companyDetails",
//     name: "companyDetails",

//     component: () => import("../components/companyRegister.vue"),
//   },
//   {
//     path: "/companyDashboard",
//     name: "companyDashboard",
//     component: () => import("@/components/c_dashboard.vue"),
//   },
//   {
//     path: "/companySignup",
//     name: "companySignup",

//     component: () => import("@/components/CompanySignup.vue"),
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
