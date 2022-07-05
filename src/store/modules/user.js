import router from "@/router"
import {login,code,getUserInfo} from "../../api/sys"
import {setItem,getItem,removeAllItem} from "../../utils/storage"

export default{
  namespaced:true,
  state:{
    token:getItem('token') || "",
    userInfo:getItem('userInfo') || '',
  },
  mutations:{
    // 存储token
    setToken(state,token){
      state.token=token
      setItem('token',token)
    },
    // 存储userinfo
    setUserInfo(state,userInfo){
      state.userInfo=userInfo
      setItem('userInfo',userInfo)
    }
  },
  actions:{
    // 登录
    login({commit},userInfo){
      let{username,password}=userInfo
      return new Promise((resolve,reject)=>{
        login({username,password}).then(res=>{
          console.log(res)
          resolve()
        }).catch(error=>{
          reject()
        })
      })
    },
    // 验证码
    async code({commit}){
      var res=await code()
      // console.log(res.data.data.token)
      commit('setToken',res.data.data.token)
      return res.data.data
    },
    // 获取用户信息
    async getUserInfo({commit}){
      const res=await getUserInfo()
      console.log(res,'用户信息')
    },
    // 退出登录
    async logOut({commit}){
      commit('setToken',"")
      commit('setUserInfo',"")
      removeAllItem()
      router.push('/login')
    }
  },
}