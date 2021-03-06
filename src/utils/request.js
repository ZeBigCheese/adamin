import store from "@/store";
import axios from "axios";
import { Message } from 'element-ui';

// 创建实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 3000,
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  //通过请求拦截器，将token发送给后台
    config.headers.Authorization=`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjU3MDAxODA2LCJleHAiOjE2NTc2MDY2MDZ9.hWTg8QsM2ziulSZSlkeNnX7vpz7YydMQ1uVMSX0Fi2Q4K4yIu68aLs6DEtWpE1ZQaq0m7ZuQd4XViU9sXW7jNQ`
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default service