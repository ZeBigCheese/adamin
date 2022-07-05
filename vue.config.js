const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:"https://www.markerhub.com/vueadmin/fonts/element-icons.535877f5.woff",
        changeOrigin:true,
        pathRewrite:{'^/api':''}
      }
    }
  }
});
