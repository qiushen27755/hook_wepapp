import React from 'react';
 //样式
 import {IconStyle} from './assets/iconfont/iconfont'
 import {GlobalStyle} from './styles'
 //路由
 import {HashRouter as Route} from 'react-router-dom'
 import { renderRoutes } from 'react-router-config'
 import routes from './router'

function App(){
    return (
             <Route>
 
            <GlobalStyle></GlobalStyle>
            <IconStyle></IconStyle>
                 {renderRoutes(routes)}
             </Route>
     )
}
 
export default App;