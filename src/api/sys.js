import request from "../utils/request"

// 登录
export const login=(data)=>{
  return request({
    url:"/vueadmin/login",
    method:"GET",
    data
  })
}


// 验证码
export const code=()=>{
  return request({
    url:"/vueadmin-java/captcha",
    method:"GET"
  })
}