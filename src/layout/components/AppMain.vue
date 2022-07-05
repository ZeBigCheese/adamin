<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
  import {isTags} from "../../utils/tags"

  export default {
     watch:{
        $route:{
            handler(newRouter){
               if(isTags(newRouter.path)){
                let {path,meta,fullpath}=newRouter
                this.$store.commit('app/addTagsViewList',{
                  path,
                  meta,
                  fullpath
                })
               }
            },
            immediate: true
        }
    },
  }
</script>

<style lang="scss" scoped>
.app-main{
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 120px 20px 20px 20px ;
  // box-sizing: border-box就是将border和padding数值包含在width和height之内，这样的好处就是修改border和padding数值盒子的大小不变。
  box-sizing: border-box;
}
</style>