import Cookies from 'js-cookie'
import { getGameList } from '../../api/app'

const state = {
  device: 'desktop',
  size: Cookies.get('size') || 'medium',
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  gameList:[],
}

const mutations = {
  INIT:(state)=>{
   
  },
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', '1')
    } else {
      Cookies.set('sidebarStatus', '')
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
    Cookies.set('sidebarStatus', '')
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  SET_GAME_LIST:(state, list)=>{
    state.gameList = list
  }
}

const actions = {
  // 初始化頁面資料
  init({commit}){
    return new Promise((resolve, reject) => {
      getGameList().then(res=>{
          if(res.message=='success'){
            commit('SET_GAME_LIST', res.list);
            resolve(res)
          } 
      }).catch((error) => {
        reject(error)
      })
    
    })
  },
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
  setGameList({ commit }, list){
    commit('SET_GAME_LIST', list)
  },
  //測速
  async APIgetNetTestLines(){
    const response = await getNetTestLines();
    return response.data;
  },
  async APIspeedTestInfo(){
    const response = await speedTestInfo();
    return response.data;
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
