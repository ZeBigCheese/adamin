<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.app-main{
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px ;
  // box-sizing: border-box就是将border和padding数值包含在width和height之内，这样的好处就是修改border和padding数值盒子的大小不变。
  box-sizing: border-box;
}
</style>