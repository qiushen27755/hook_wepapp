
import React from 'react';
import { Redirect } from 'react-router-dom'

 
import Login from '../application/login'
import Unclaimed from '../application/unclaimed'
import Claimed from '../application/claimed'
import Claiming from '../application/claiming'
import ClaimedInfo from '../application/claimedInfo'
import Search from '../application/search'
//子集
export default[
    {
        path:'/',
        component: Login,
        routes:[
            { path :'/', exact:true, render:()=>(<Redirect to={"/unclaimed"} /> )},
            { path:'/unclaimed', component : Unclaimed }, 
            { path:'/claimed' , component : Claimed},
            { path:'/claimedInfo/:id/:state',component: ClaimedInfo },
            { path:'/claiming',component: Claiming},
            { path:'/search',exact: true,key:"search",component: Search },
        ]
    }
]