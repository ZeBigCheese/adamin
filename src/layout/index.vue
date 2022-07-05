<template>
  <div class="app-wrapper">

    <!-- 左侧导航栏 -->
    <sidbar></sidbar>
    <!-- 右侧整体 -->
    <div class="main-container">
      <!-- 右侧上 -->
      <div class="fixed-header">
        <nav-bar></nav-bar>
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
  export default {
  components: { AppMain, NavBar,Sidbar },
    
  }
</script>

<style lang="scss" scoped>
.app-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>