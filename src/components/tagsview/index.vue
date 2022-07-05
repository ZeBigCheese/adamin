<template>
  <div class="tags-view-container">
    <router-link
    :to="item.path"
    v-for="item in $store.getters.tagsViewList"
    :key="item.path"
     class="tags-view-item" 
     :class="isActive(item) ? 'active' : ''" 
    >
    {{item.meta.title}}
    </router-link>
  </div>
</template>

<script>
  export default {
    methods: {
     isActive(item) {
        return item.path==this.$route.path
      }
    },
  }
</script>

<style lang="scss" scoped>
.tags-view-container{
  height: 50px !important;
  background: #fff;
  height: 100%;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 1px 0 rgba(0,0,0,0.12);
  .tags-view-item{
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    border: 1px solid #d8d8d8;
    color: #303133;
    font-size: 14px;
    padding: 0 8px;
  }
  .active{
    color: #409eff;
    border-bottom: 1px solid transparent;
  }
}
</style>