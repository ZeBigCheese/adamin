import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 引入全局公共样式
import "./style/index.scss"
// 引入页面鉴权
import "./permission"

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
