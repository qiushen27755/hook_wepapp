import React,{useState,useEffect,useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from './style';
import SearchBox from '../../ui/search-box'
import {Toast, List} from 'antd-mobile'
import httpPost from '../../api/fetch'
import Scroll from '../../ui/scroll'
import {dateToLocalString} from '../../api/utils'
import {getStorage} from '../../api/storage'
function Search (props) {
  // 控制动画
  const [show, setShow] = useState (false);
  const [query, setQuery] = useState ('');
  const [data,setData] =useState([]); //数据
      useEffect (() => {
        setShow (true);
      }, []);
      //请求列表
      useEffect(()=>{
        if(!query) return
        httpPost({
          // 搜索 解决时间戳的问题
          url:'checkSever/search/self',
          data:{msg:query,code:getStorage('userCode')},
          // 数据库搜索 无法检索时间戳
          // url:'checkSever/search',
          // data:{msg:query,code:getStorage('userCode')},
          success: res=>{ 
            setData(JSON.parse(JSON.stringify(res.data)))
            console.log(res.data)
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
          setData([]);
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
              <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery}></SearchBox>
           </div>
            <Scroll>
                  <List renderHeader={()=> !query?null:<span>收支单</span> }>
                      {
                        data?data.map((i)=>
                        <List.Item key={i.pk_pay} multipleLine wrap arrow="horizontal" 
                        onClick={()=>props.history.push (`/claimedInfo/${i.pk_pay}/${i.status==='未认领'?0:i.status==='部份认领'?1:i.status==='完全认领'?2:null}`)}>
                                <span>{i.type}</span><span style={{float:"right"}}>{i.pk_pay}</span>
                                <br />
                                {i.cust_name} <span style={{float:'right'}}>{i.status}</span>  
                                <br />
                                <List.Item.Brief>{dateToLocalString(i.time)}
                                <span style={{float:'right',color:'green'}}>￥{i.money}</span> 
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
 