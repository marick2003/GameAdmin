
  
  const gameList = [
    {   name: '真人荷官',
        path:'1',
        meta: { title: '真人荷官', icon: 'Star', roles: ['admin'] },
        children:[]},
    {   name: '彩票',
        path:'2',    
        meta: { title: '極速賽車', icon: 'Star', roles: ['admin'] },
        children:[
        {
            name: '賽車',
            path:'2-1',
            meta: { title: '賽車', roles: ['admin'] },
            children:[
                    {
                        name:'極速賽車',
                        path:'2-1-1',
                        meta: { title: '極速賽車', roles: ['admin'] },
                    },
                    {
                        name:'極速賽車',
                        path:'2-1-2',
                        meta: { title: '極速賽車', roles: ['admin'] },
                    },
                    {
                        name:'極速賽車',
                        path:'2-1-3',
                        meta: { title: '極速賽車', roles: ['admin'] },
                    },
                ]},
            {
            name: '時時彩',
            path:'2-2',
            meta: { title: '時時彩', roles: ['admin'] },
            children:[
                {
                    name:'英國時時彩',
                    path:'2-2-1',
                    meta: { title: '英國時時彩', roles: ['admin'] },
                }
            ]},
        
        {
            name: '天天彩',
            path:'2-3',
            meta: { title: '天天彩', roles: ['admin'] },
            children:[
                {
                    name:'英國天天彩',
                    path:'2-3-1',
                    meta: { title: '英國天天彩', roles: ['admin'] },
                }
            ]
        },
        ] 
    }
  ]
  
  const appMockList = [

    {
      url: '/api/GetGameList',
      method: 'get',
      response: () => {
        const list = gameList
        return {
          code: 20000,
          message: 'success',
          list
        }
      }
    }
  ]
  
  export default appMockList
  