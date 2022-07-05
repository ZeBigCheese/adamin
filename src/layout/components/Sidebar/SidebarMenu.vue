<template>
  <div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
       unique-opened
      active-text-color="#ffd04b">
      <sidebaritem v-for="item in routes" :key="item.path" :route='item'></sidebaritem>
    </el-menu>

  </div>
</template>

<script>
import Sidebaritem from './Sidebaritem.vue'
  export default {
  components: { Sidebaritem },
    data() {
      return {
          routes: [
        {
          path: "/profile",
          name: "profile",
          meta: {
            title: "首页",
            icon: "el-icon-s-home",
          },
        },
        {
          path: "/user",
          redirect: "/user/manage",
          meta: {
            title: "系统管理",
            icon: "el-icon-s-operation",
          },
          props: {
            default: false,
          },
          children: [
            {
              path: "/user/manage",
              name: "userManage",
              meta: {
                title: "用户管理",
                icon: "el-icon-s-custom",
              },
              children: [],
            },
            {
              path: "/user/role",
              name: "userRole",
              meta: {
                title: "角色管理",
                icon: "el-icon-rank",
              },
              children: [],
            },
            {
              path: "/user/permission",
              name: "userPermission",
              meta: {
                title: "菜单管理",
                icon: "el-icon-menu",
              },
              children: [],
            },
          ],
        },
        {
          path: "/article",
          redirect: "/article/ranking",
          meta: {
            title: "系统工具",
            icon: "el-icon-menu",
          },
          props: {
            default: false,
          },
          children: [
            {
              path: "/article/ranking",
              name: "articleRanking",
              meta: {
                title: "数字字典",
                icon: "el-icon-s-order",
              },
              children: [],
            },
          ],
        },
      ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>