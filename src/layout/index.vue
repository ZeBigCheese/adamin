<template>
  <div class="app-wrapper">

    <!-- 左侧导航栏 -->
    <sidbar></sidbar>
    <!-- 右侧整体 -->
    <div class="main-container">
      <!-- 右侧上 -->
      <div class="fixed-header">
        <nav-bar></nav-bar>
        <tagsview></tagsview>
      </div>
      <!-- 右侧下面 -->
      <app-main></app-main>
    </div>

  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
import Sidbar from "./components/Sidebar/index.vue"
import tagsview from "../components/tagsview/index.vue"

  export default {
  components: { AppMain, NavBar,Sidbar,tagsview },
    
  }
</script>

<style lang="scss" scoped>
.app-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .fixed-header{
    position: fixed;
    top: 0;
    right: 0;
    background: #17b3a3;
    z-index: 9;
    width: calc(100% - 210px);
  }
</style>