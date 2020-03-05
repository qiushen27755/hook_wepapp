import React from 'react';
import {Grid , NoticeBar} from 'antd-mobile'
import ListGrid from './../../component/list'
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'http://172.16.59.195:1119/fs/service/default/ufiles/819af11f-5c93-4e40-899a-26aed3e0781e?isView=true',
    text: `核销认领${i}`,
    link: 'certClaimed'
  }));
  const message='今天天气很晴朗'


    function IndexHome(props){
        const {history}=props
        
        const enterModules=(e)=>{
            history.push (`/${e}`)
        }
        return(
            <div>
                <NoticeBar mode='closable'   marqueeProps={{ loop: true, style: { padding: '0 7.5px',color:'blue' } }}>{message}</NoticeBar>
                <ListGrid gridList={data} ></ListGrid>
                {/* <Grid data={data} columnNum={3} onClick={(el)=> enterModules(el.link) } /> */}
                {/* <Grid data={data}
                    columnNum={3}
                    hasLine
                    onClick={(el,index)=> enterModules(el.link) }  

                    renderItem={dataItem => (
                        <div style={{ padding: '10px 10px 10px 10px' }} >
                            <img src={dataItem.icon}  style={{ width: '75px', height: '75px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )} 
                /> */}
            </div>
        )
    }
export default IndexHome