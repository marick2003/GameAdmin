import request from '../utils/request'

/**
 * 測速線路
 * @returns
 */
export function getNetTestLines() {
    return request({
      url: '/SpeedTest/GetNetTestLines',
      method: 'get',
    })
  }

/**
 * 測速線路資訊
 * @param {*} params
 * @returns
 */
export function speedTestInfo() {
    return request({
      url: '/SpeedTest/SpeedTestInfo',
      method: 'get',
    })
  }
  

  /**
 * 遊戲列表
 * @param {*} params
 * @returns
 */
export function getGameList() {
    return request({
      url: '/api/GetGameList',
      method: 'get',
    })
  }
  