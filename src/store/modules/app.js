import { setItem,getItem } from "@/utils/storage";

export default{
  namespaced:true,
  state:{
    tagsViewList:getItem('tagsView') || []
  },
  mutations:{
    // 添加tags
    addTagsViewList(state,tag){
      let isFind=state.tagsViewList.find(item=>{
        return item.path==tag.path
      })
       // 处理重复
       if(!isFind){
        state.tagsViewList.push(tag)
        setItem('tagsView',state.tagsViewList)
       }
    }
    
  },
  actions:{

  }
}