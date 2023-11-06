import request from '@/utils/request'

export function getCheckinDayData(data) {
  return request({
    url: '/system/organize/employee/checkIn',
    method: 'post',
    data
  })
}
