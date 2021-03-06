// 获取数据
export const getItem=(key)=>{
  let data=localStorage.getItem(key)
  try{
    // 将字符串转换为对象
    return JSON.parse(data)
  }catch(e){
    return data
  }
}
// 存储数据
export const setItem=(key,value)=>{
  if(typeof value=='object'){
    value=JSON.stringify(value)
  }
  localStorage.setItem(key,value)
}

// 删除数据
export const removeItem=(key)=>{
  localStorage.removeItem(key)
}


// 清除数据
export const removeAllItem=()=>{
  localStorage.clear()
}