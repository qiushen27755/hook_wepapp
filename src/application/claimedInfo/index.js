import React,{useState,useEffect,useRef } from 'react';
import { withRouter } from 'react-router-dom';
import {Toast } from 'antd-mobile'
import httpPost from '../../api/fetch'
import ListInfo from '../../component/infolist'
  
function ClaimedInfo(props){
    const pk_pay=props.match.params.id
    const state=props.match.params.state
     const [data,setData]=useState([])
    const info=useRef();
    useEffect(()=>{
          httpPost({
            url:'checkSever/payListInfo',
             data:{
              "pk_pay":pk_pay,
              "status":state
            },
            success:res=>{
                const list=JSON.parse(JSON.stringify(res.data))
                  setData(list)
                  console.log({
                    "pk_pay":pk_pay,
                    "status":state
                  })
            },
            error:error => Toast.fail('Load failed'+error, 1)})
     },[pk_pay,state])
    return(
            <div ref={info}    >
                      <ListInfo data={data}/>
            </div>
          )
}
export default withRouter(ClaimedInfo)