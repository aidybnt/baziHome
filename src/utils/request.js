import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://data.com/api/',
  baseURL: 'https://data.water555.xyz/api/',
  // timeout: 3000
  timeout: 60000
})

instance.interceptors.request.use(
  function (config) {
    // console.group('全局请求拦截')
    // console.log(config)
    // console.groupEnd()
    return config
  }, error => {
    // console.group('全局请求错误拦截')
    // console.log(error.response);
    // console.groupEnd()
    return Promise.reject(error.response);
  }
)

instance.interceptors.response.use(
  function (config) {
    // console.group('全局响应拦截')
    // console.log(config)
    // console.groupEnd()
    return config
  }, error => {
    // console.group('全局响应错误拦截')
    // console.log(error);
    // console.groupEnd()
    //网络不通弹窗
    if (error == 'Error: Network Error') {
      alert('网络不通，请检查网络')
    }
    //超时判断
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      return Promise.reject('timeout');
    }
    return Promise.reject(error.response);
  }
)

export function get(url, params) {
  return instance.get((url, {
    params
  }))
}

export function post(url, data, config) {
  return instance.post(url, data, config)
}