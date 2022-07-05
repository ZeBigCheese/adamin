import {login,code} from "../../api/sys"
import {setItem,getItem} from "../../utils/storage"

export default{
  namespaced:true,
  state:{
    token:getItem('token') || "",
  },
  mutations:{
    // 存储token
    setToken(state,token){
      state.token=token
      setItem('token',token)
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
    }
  },
}