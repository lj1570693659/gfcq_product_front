import request from '@/utils/request'

export function getAll(params) {
  return request({
    url: '/product/stage/all/' + params.proId,
    method: 'get',
    params
  })
}
