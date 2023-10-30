import { getCompanyGames,getReportLimitDays } from '../../api/report'

const state={
    CompanyGames: {},
}

const actions = {

    async fetchCompanyGames({commit}){
        const response= await getCompanyGames();
        let tempData = {};
        const gameGroupName = ["", "高频彩游戏", "", "六合彩游戏", "七星彩游戏"];
        response.Collections.forEach(function (item) {
            var obj = item;
            if (item.LotteryId >= 2500 && item.LotteryId < 2600) {
                obj.gameGroup = 4;
            } else if (item.AmountBloc == 2 || item.LotteryId >= 2400 && item.LotteryId < 2500) { //六合在同一個gameGroup
                obj.gameGroup = 3;
            }
            else {
                obj.gameGroup = item.AmountBloc;
            }
  
            if (!tempData[item.gameGroup]) {
                tempData[item.gameGroup] = [];
                tempData[item.gameGroup].push(item);
            } else {
                tempData[item.gameGroup].push(item);
            }
        });
        let x = {};
        x.Collections = {};
        x.Collections.Group = tempData;
        x.Collections.gameGroupName = gameGroupName;
        console.log(x);
        commit('SET_COMPANYGAMES', x);
    }
}


const mutations = {
    SET_COMPANYGAMES: (state, payload) => (
        state.CompanyGames = payload
    ),

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  