import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/auth/list',
    method: 'get',
    params
  })
}

export function setData(data) {
  return request({
    url: '/auth/update',
    method: 'post',
    data
  })
}
