import axios from '@/libs/api.request'

export const getMainList = () => {
  return axios.request({
    url: '/Spider/MainList/list',
    method: 'get'
  })
}

export const getMainListPost = (data) => {
  return axios.request({
    url: '/Spider/MainList/list',
    method: 'post',
    data: data
  })
}
