<template>
  <div class="navbar">

    <div>VueAdmin后台管理系统</div>
    <el-avatar class="img-one" :size="40" src="https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg"></el-avatar>
    <div class="right-menu">

        <el-dropdown>
          <span class="el-dropdown-link">
            text<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/article/1">
              <el-dropdown-item>个人信息</el-dropdown-item>
            </router-link>
            <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      

    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      logOut() {
        this.$store.dispatch('user/logOut')
      }
    },
  }
</script>

<style lang="scss" scoped>
.navbar{
  height: 50px;
  border: 1px solid rgb(113, 113, 113);
  overflow: hidden;
  display: flex;
  justify-content:space-around;
  align-items: center;
  .img-one{
    position: absolute;
    right: 300px;
  }
 
}
</style>