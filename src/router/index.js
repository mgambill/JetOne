import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Admins from "../views/admins/Index.vue";
import Clients from "../views/clients/Index.vue";
import Members from "../views/members/Index.vue";

import auth from "../auth";

Vue.use(VueRouter);

const requireAuth = role => (to, from, next) => {
  console.log(role);
  if (!auth.loggedIn()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: "LandingLayout" }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    blank: true,
    meta: { layout: "EmptyLayout" }
  },
  {
    path: "/logout",
    name: "logout",
    async beforeEnter(_to, from, next) {
      await auth.logout();
      next({ path: "/" });
    }
  },
  {
    path: "/handler",
    name: "handler",
    beforeEnter(to, from, next) {
      if (!auth.loggedIn()) {
        return next({ path: "/login" });
      }
      const { role } = auth.getToken();

      if (role === "admin") next({ path: "/admins" });
      else if (role === "client") next({ path: "/clients" });
      else if (role === "customer") next({ path: "/members" });
    }
  },
  {
    path: "/members",
    name: "members",
    component: Members,
    beforeEnter: requireAuth("customer"),
    children: [
      {
        path: "/",
        name: "members-home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "members" */ "../views/members/Home.vue")
      }
    ]
  },
  {
    path: "/clients",
    name: "clients",
    component: Clients,
    beforeEnter: requireAuth("client")
  },
  {
    path: "/admins",
    name: "admins",
    component: Admins,
    beforeEnter: requireAuth("admin"),
    children: [
      {
        path: "/",
        name: "admin-home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "admins" */ "../views/admins/Home.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes
});

export default router;
