import request from '../utils/request'
/**
 * 取得公司遊戲
 * @returns
 */
export function getCompanyGames(){
    return request({
        url: '/Report/GetCompanyLotteries',
        method: 'get',
      })
}

/**
 * 賽區時間
 * @returns
 */
export function getReportLimitDays(){
    return request({
        url: '/Report/GetReportLimitDays',
        method: 'get',
      })
}