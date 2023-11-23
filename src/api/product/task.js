import request from '@/utils/request'

export function getProductLists(params) {
  return request({
    url: '/task/product_lists',
    method: 'get',
    params
  })
}

export function getNpiLists(params) {
  return request({
    url: '/task/npi_lists',
    method: 'get',
    params
  })
}

export function modifyData(data) {
  return request({
    url: '/task/product_modify',
    method: 'put',
    data
  })
}

export function modifyNpiData(data) {
  return request({
    url: '/task/npi_modify',
    method: 'put',
    data
  })
}

export function getQualifyLists(params) {
  return request({
    url: '/task/quality_lists',
    method: 'get',
    params
  })
}

export function modifyQualifyData(data) {
  return request({
    url: '/task/quality_modify',
    method: 'put',
    data
  })
}

export function getProduceLists(params) {
  return request({
    url: '/task/produce_lists',
    method: 'get',
    params
  })
}

export function modifyProduceData(data) {
  return request({
    url: '/task/produce_modify',
    method: 'put',
    data
  })
}

export function getDevelopLists(params) {
  return request({
    url: '/task/develop_lists',
    method: 'get',
    params
  })
}

export function modifyDevelopData(data) {
  return request({
    url: '/task/develop_modify',
    method: 'put',
    data
  })
}
