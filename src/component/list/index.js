import React from 'react';
import {Icon} from 'antd-mobile'
import { 
    ListWrapper,
    ListItem,
    List
  } from './style';
 function ListGrid (props) {
    return (
      <ListWrapper>
        <h1 className="title"> 列表 </h1>
        <List>
          {
            props.gridList.map ((item, index) => {
              return (
                <ListItem key={item.icon+index}>
                  <div className="img_wrapper">
                       {/* 加此参数可以减小请求的图片资源大小 */}
                       
                      <Icon type={item.icon}/>
                    </div>
                  <div className="desc">{item.text}</div>
                </ListItem>
              )
            })
          }
        </List>
      </ListWrapper>
    );
}

export default ListGrid