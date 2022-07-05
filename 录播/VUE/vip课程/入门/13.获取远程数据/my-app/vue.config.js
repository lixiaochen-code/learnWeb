const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api": {
        target:"https://zhihu-web-analytics.zhihu.com",
        secure:false
      }
    }
  }
})