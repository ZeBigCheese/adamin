import router from "./router";

import store from "./store";

const whiteList=['/404','/401','/login']

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if(store.getters.token){
    if(to.path=='/login'){
      next('/')
    }else{
      if(store.getters.hasUserInfo){
        next()
      }else{
        store.dispatch('user/getUserInfo')
        next()
      }
    }
  }else{
    if(whiteList.includes(to.path)){
      next()
    }else{
      next('/login')
    }
  }
})