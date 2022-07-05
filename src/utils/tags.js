const whileList=['/login','/401','/404']

export function isTags(path){
  return !whileList.includes(path)
}