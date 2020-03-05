
import React from 'react';
import { Redirect } from 'react-router-dom'

import LoginHome from '../page/login' 
import CertClaimed from '../page/certCalimed'

import Unclaimed from '../application/unclaimed'
import Claimed from '../application/claimed'
import Cert from '../application/cert'

import ClaimedInfo from '../application/claimedInfo'
import Search from '../application/search'
//子集

// 可以自已切  Redirect 切 /unclaimed 就是原始的
export default[
    {
        path:'/',
        component: LoginHome,
        routes:[
            { path:'/certClaimed' , exact:true ,component: CertClaimed,
                routes:[
                    {path: '/certClaimed', render:()=>(<Redirect to={"/certClaimed/unclaimed"} />)},
                    { path:'/certClaimed/unclaimed', component : Unclaimed }, 
                    { path:'/certClaimed/claimed' , component : Claimed},
                    { path:'/certClaimed/claimedInfo/:id/:state',component: ClaimedInfo },
                    { path:'/certClaimed/cert',component: Cert},
                    { path:'/certClaimed/search',exact: true,key:"search",component: Search },
                ]
            }
            // { path :'/', exact:true, render:()=>(<Redirect to={"/index"} /> )},
            
        ]
    }
]