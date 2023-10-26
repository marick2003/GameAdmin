import { defineStore } from 'pinia'
import { useCookies } from '@vueuse/integrations/useCookies'
const cookies = useCookies();

export const app = defineStore({
    id: 'app',
    state: () => ({
        sidebar: {
            opened: cookies.get('sidebarStatus') ? !!cookies.get('sidebarStatus') : true,
            withoutAnimation: false
        }
    }),
    actions:{
        toggleSideBar(){
            this.sidebar.opened=!this.sidebar.opened;
            this.withoutAnimation=false;
            if(this.sidebar.opened) {
                cookies.set('sidebarStatus', '1')
            }else{
                cookies.set('sidebarStatus', '')
            }
        },
        closeSideBar(){

        },
        toggleDevice(){

        },
        setSize(){
            
        }

    }

});