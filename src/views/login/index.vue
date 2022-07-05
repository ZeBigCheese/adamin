<template>
  <div class="login-container">
    
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
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
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      }
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
}
</style>