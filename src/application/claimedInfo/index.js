import React,{useState,useEffect,useRef } from 'react';
import { withRouter } from 'react-router-dom';
import {Toast } from 'antd-mobile'
import httpPost from '../../api/fetch'
import ListInfo from '../../component/infolist'
  
function ClaimedInfo(props){
  const [payment,setPayment]=useState([])
  const [cert,setCert]= useState([])
  
  const pk_pay=props.match.params.id
  const state=props.match.params.state


    const info=useRef();
    useEffect(()=>{
          httpPost({
            url:'checkSever/payListInfo',
             data:{
              "pk_pay":pk_pay,
              "status":state
            },
            success:res=>{
                console.log(res)
                const payment=JSON.parse(JSON.stringify(res.payment))
                const cert=JSON.parse(JSON.stringify(res.cert))
                setPayment(payment)
                setCert(cert)
            },
            error:error => Toast.fail('Load failed'+error, 1)})
     },[pk_pay,state])
    return(
            <div ref={info}    >
                      <ListInfo payment={payment} cert={cert}/>
            </div>
          )
}
export default withRouter(ClaimedInfo)