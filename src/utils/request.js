import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://data.com/api/',
  // baseURL: 'http://192.168.1.163/api/',
  baseURL: 'https://data.water555.xyz/api/',
  // timeout: 3000
  timeout: 60000
})

instance.interceptors.request.use(
  function (config) {
    return config
  }, error => {
    return Promise.reject(error.response);
  }
)

instance.interceptors.response.use(
  function (config) {
    return config
  }, error => {
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