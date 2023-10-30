const gameList=[
        {
            "LotteryId": 2400,
            "LotteryName": "英国六合彩",
            "AmountBloc": 3
        },
        {
            "LotteryId": 2401,
            "LotteryName": "香港六合彩",
            "AmountBloc": 2
        },
        {
            "LotteryId": 2402,
            "LotteryName": "新澳六",
            "AmountBloc": 21
        },
        {
            "LotteryId": 2403,
            "LotteryName": "老澳六",
            "AmountBloc": 22
        }
    ]


const reportMockList = [

    {
      url: '/Report/GetCompanyLotteries',
      method: 'get',
      response: () => {
        const Collections = gameList
        return {
          code: 20000,
          message: 'success',
          Collections
        }
      }
    }
  ]
  export default reportMockList
  