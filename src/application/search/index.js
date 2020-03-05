// 弃用 保留 ,改用antd 的ui 自动全适配

import React,{useState,useEffect,useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from './style';
import SearchBox from '../../ui/search-box'
import {Toast, List } from 'antd-mobile'
import httpPost from '../../api/fetch'
import Scroll from '../../ui/scroll'
function Search (props) {
  // 控制动画
  const [show, setShow] = useState (false);
  const [query, setQuery] = useState ('');
  const [mobile,setMobile] =useState('');
  const [payment,setPayment] =useState([]); //数据
    
      useEffect (() => {
        setShow (true);
      }, []);
      //请求列表
      useEffect(()=>{
        
        if(!query) return
        httpPost({
          url:'checkSever/search',
          data:{msg:query},
          success: res=>{ 
    
            setPayment(JSON.parse(JSON.stringify(res.payment)))
            console.log(res.payment)
           },
          error:error => Toast.fail('登录异常:'+error, 1) 
        })
      },[query])

      // 由于是传给子组件的方法，尽量用 useCallback 包裹，以使得在依赖未改变，始终给子组件传递的是相同的引用
      const searchBack = useCallback (() => {
        setShow (false);
      }, []);
      // 传递组件事件
      const handleQuery = (q) => {
           setPayment([]);
           setQuery (q);
       }
      
      return (
        <CSSTransition
          in={show}
          timeout={300}
          appear={true}
          classNames="fly"
          unmountOnExit
          onExited={() => props.history.goBack()}
        >
        <Container>
           <div className="search_box_wrapper">
               <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery} ></SearchBox>
           </div>
            <Scroll>
                  <List renderHeader={()=> !query?null:<span>收支单</span> }>
                      {
                        payment?payment.map((i)=>
                       
                        <List.Item key={i.pk_pay} multipleLine wrap arrow="horizontal" onClick={()=>props.history.push (`/claimedInfo/${i.pk_pay}/${i.status}`)}>
                                
                                <span>{i.propertype}</span><span style={{float:"right"}}>{i.pk_pay}</span>
                                <br />
                                {i.cust_name} <span style={{float:'right'}}>{i.memo}</span>  
                                <br />
                                <List.Item.Brief>{i.pay_time}
                                <span style={{float:'right',color:'green'}}>￥{i.pay_money}</span> 
                                </List.Item.Brief>
                          </List.Item> 
                        ):null
                      }  
                  </List>
            </Scroll>
        </Container>
      </CSSTransition>
      )
}
  
export default Search;
 