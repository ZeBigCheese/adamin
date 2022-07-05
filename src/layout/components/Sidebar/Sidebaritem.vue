<template>
  <div>
    <!-- 单身狗 -->
      <el-menu-item :index="route.path" v-if="!route.children">
        <i :class="route.meta.icon"></i>
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
      <!-- 大家族 -->
      <el-submenu :index="route.path" v-if="route.children && route.children.length>0">
        <template slot="title">
          <i :class="route.meta.icon"></i>
          <span>{{route.meta.title}}</span>
        </template>
          <el-menu-item v-for="item in route.children" :key="item.path" :index="item.path">
            <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
          </el-menu-item>
      </el-submenu>
     

  </div>
</template>

<script>
  export default {
    props:{
      route:{
        type:Object,
        require:true,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>