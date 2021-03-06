import React,{useState,useEffect} from 'react'
import { Top ,Tab ,TabItem} from './styles';
import LoadingSelf from '../../ui/loading'
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';
import httpPost from '../../api/fetch'
import * as dd from 'dingtalk-jsapi'
import {setStorage,clearStorage} from '../../api/storage'
import {Toast, Icon} from 'antd-mobile'

function Login(props){
        const {route}=props
        const [redirect,setRedirect]=useState(false)
        
        useEffect(()=>{
            clearStorage()
            navigator.userAgent.toLowerCase().indexOf('dingtalk') > -1 ?
                  dd.ready(()=>{
                     dd.runtime.permission.requestAuthCode({
                         corpId: "dingcd7886c79215f02235c2f4657eb6378f",
                         onSuccess:  result=> {
                             const code = result.code;
                             httpPost({
                                url:'checkinfo/ssoDingLogin',
                                data:{code:code},   
                                success: res=>{ 
                                  setStorage('userId',res.data.userid)
                                  setStorage('pk_psndoc',res.data.pk_psndoc)
                                  setStorage('sessionId',res.data.sessionId)
                                  setStorage('userCode',res.data.usercode)
                                  setStorage('name',res.data.username)
                                  setRedirect(true)
                               },
                            error:error => Toast.fail('登录异常:'+error, 1) }
                            )
                             
                             }
                         });
               }) :
               httpPost({
                url:'checkinfo/ssoDingLogin',
                data:{code:'111582'},   
                success: res=>{ 
                  setStorage('userId',res.data.userid)
                  setStorage('pk_psndoc',res.data.pk_psndoc)
                  setStorage('sessionId',res.data.sessionId)
                  setStorage('userCode',res.data.usercode)
                  setStorage('name',res.data.username)
                  setRedirect(true)
               },
            error:error => Toast.fail('登录异常:'+error, 1) }
            )
                 
         },[redirect])
 
        return (
            <div>
                <Top>
                    <span className="iconfont home">{''}</span>{/*&#xe616;*/}
                    <span className="title" style={{textAlign:'center'}}>Sunon</span>
                    <span className="iconfont search" onClick={() => props.history.push('/search')}><Icon type='search' color='#ffffff'/></span>
                </Top> 
                <Tab>
                    <NavLink to="/unclaimed" activeClassName="selected"><TabItem><span>未认领</span></TabItem></NavLink>
                    <NavLink to="/claiming" activeClassName="selected"><TabItem><span>部分认领</span></TabItem></NavLink>
                    <NavLink to="/claimed" activeClassName="selected"><TabItem><span>已认领</span></TabItem></NavLink>
                </Tab>
            {  redirect ?  renderRoutes (route.routes)  : <LoadingSelf memo='正在登录'/>}
            </div> 
        ) 
}
  
export default Login