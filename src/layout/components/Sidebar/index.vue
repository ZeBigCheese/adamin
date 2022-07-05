<template>
  <div class="sidebar-container" style="background:#545c64">
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'
  export default {
  components: { SidebarMenu },
    
  }
</script>

<style lang="scss" scoped>

</style>