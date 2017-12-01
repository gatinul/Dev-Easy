import axios from 'axios'

export function fetch(url,params){
  return new Promise((resolve,reject)=>{
    axios.post(url,params)
      .then((res)=>{
        resolve(res.data)
      })
      .catch((err)=>{
        reject(err)
      })
  })
}

export default {
  // 项目获取
  addIntf(param){
    return fetch('/addIntf', param)
  },
}
