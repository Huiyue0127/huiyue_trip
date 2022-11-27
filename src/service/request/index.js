import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()

class axRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    //网络请求拦截器,通过拦截器更新loading服务的显示状态
    this.instance.interceptors.request.use(res => {
      mainStore.isLoading = true
      return res
    },err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    },err => {
      mainStore.isLoading = false
      return err
    })
  }



  //处理网路请求逻辑
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new axRequest(BASE_URL, TIMEOUT)