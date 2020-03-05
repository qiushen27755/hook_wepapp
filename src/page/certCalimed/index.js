import React ,{useState,useEffect}from 'react';
import { Top ,Tab ,TabItem} from './style';
import { NavLink } from 'react-router-dom';
import {Icon} from 'antd-mobile'
import { renderRoutes } from "react-router-config";

function CertClaimed(props){
    console.log('进入模块')
    const {route}=props
    console.log(props.location.pathname)
  
    return (
    <div>
        <Top>
            <span className="iconfont home"  > {' '}</span>{/*&#xe616;*/}
            <span className="title" style={{textAlign:'center'}}>Sunon</span>
            <span className="iconfont search"><Icon type='search' color='#ffffff'/></span>
        </Top> 
        <Tab>
            <NavLink to="/unclaimed" activeClassName="selected"><TabItem><span>未认领</span></TabItem></NavLink>
            <NavLink to="/claimed" activeClassName="selected"><TabItem><span>已认领</span></TabItem></NavLink>
            <NavLink to="/cert" activeClassName="selected"><TabItem><span>我的合同</span></TabItem></NavLink>
        </Tab>
        {renderRoutes(route.routes)}
    </div>
         
     )
}

export default  CertClaimed