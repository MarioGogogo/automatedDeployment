import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "drag" */ "../views/Home.vue"),
    meta: {
      index: 0,
    },
  },
  {
    path: "/message",
    name: "Message",
    component: () =>
      import(/* webpackChunkName: "drag" */ "../views/Message.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "drag" */ "../views/Setting.vue"),
  },
  {
    path: "/v1.0",
    name: "v",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Child.vue"),
    children: [
      {
        path: "drag",
        name: "Drag",
        component: () =>
          import(/* webpackChunkName: "drag" */ "../views/Drag.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path: "promise",
        name: "Promise",
        component: () =>
          import(/* webpackChunkName: "promise" */ "../views/Promise.vue"),
        meta: {
          index: 1,
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
