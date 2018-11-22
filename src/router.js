import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/LoginPage.vue";
import Dashboard from "./views/Dashboard.vue";
import Plan from "./views/Plan.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
      redirect: ""
    },
    {
      path: "/home/:userId",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard/:userId",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/plan",
      name: "plan",
      component: Plan
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
