import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";

Vue.use(VueRouter);

const publicroutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path:"/",
    name:"Layout",
    component:()=>import('../layout'),
    meta: {
      title: "首页",
    },
    children:[
      {
        path:'/profile',
        name:"profile",
        component:()=>import('../views/profile'),
        meta: {
          title: "首页",
        },
      },
      {
        path:'/404',
        name:"404",
        component:()=>import('../views/error-page/404.vue')
      },
      {
        path:'/401',
        name:"401",
        component:()=>import('../views/error-page/401.vue')
      },
    ]
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import("../views/AboutView.vue"),
  // },
];
// 私有路由表
const privateRoutes=[
  {
    path:"/user",
    name:"user",
    redirect:"/user/manage",
    component:()=>import("../layout"),
    meta: {
      title: "用户管理",
      icon: "el-icon-s-custom",
    },
    children:[
      {
        path:"/user/manage",
        name:"userManage",
        component:()=>import('../views/user-manage'),
        meta: {
          title: "用户管理",
          icon: "el-icon-s-check",
        },
      },
      {
        path:"/user/role",
        name:"userRole",
        component:()=>import('../views/role-list'),
        meta: {
          title: "角色管理",
          icon: "el-icon-s-claim",
        },
      },
      {
        path:"/user/permission",
        name:"userPermission",
        component:()=>import('../views/permission-list'),
        meta: {
          title: "菜单管理",
          icon: "el-icon-male",
        },
      },
      {
        path:"/user/:id",
        name:"userInfo",
        component:()=>import('../views/user-info')
      },
    ]
  },
  {
    path:"/article",
    component:()=>import('../layout'),
    redirect:"/article/ranking",
    meta: {
      title: "数字字典",
      icon: "el-icon-s-order",
    },
    children:[
      {
        path:"/article/ranking",
        name:"articleRanking",
        component:()=>import('../views/article-ranking'),
        meta: {
          title: "数字字典",
          icon: "el-icon-notebook-2",
        },
      },
      {
        path:"/article/:id",
        name:"article",
        component:()=>import('../views/article-detail')
      },
    ]
  }
]

const router = new VueRouter({
  routes:[...publicroutes,...privateRoutes]
});

export default router;
