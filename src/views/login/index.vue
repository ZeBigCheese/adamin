<template>
  <div class="login-container">
    
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.trim="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code" style="width:300px">
        <el-input v-model.trim="ruleForm.code"></el-input>
        <img :src="imgCode" alt="" class="imgcode">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">提交</el-button>
        <el-button>获取密码</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm:{
          username:'test',
          password:"",
          code:"",
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ],
        },
        imgCode:''
      }
    },
    async created(){
      const data = await this.$store.dispatch('user/code')
      this.imgCode = data.captchaImg
    },
    methods: {
      // 点击提交
      handleLogin() {
        if(this.ruleForm.username=='test' && this.ruleForm.password=='1234567' && this.ruleForm.code.length>0){
          this.$message.success('登录成功')
          this.$router.push('/')
          return
        }else{
          this.$message('登录失败')
          this.$store.dispatch('user/login',this.ruleForm)
        }
        
      },
    },
  }
</script>

<style lang="scss" scoped>

$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .demo-ruleForm{
    width: 500px;
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:  auto;
    text-align: center;
  }
  .imgcode{
    position: absolute;
    margin-left: 10px;
  }
}
</style>