import React , {useRef, useState,useEffect } from 'react';
import {SearchBoxWrapper} from './style'
import {Icon } from 'antd-mobile'
const SearchBox = (props) => {
    const queryRef = useRef ();
    const [query, setQuery] = useState ('');    
    // 父组件针对搜索关键字发请求相关的处理
    const { handleQuery } = props;
    // 根据关键字是否存在决定清空按钮的显示 / 隐藏 
    const displayStyle = query ? {display: 'block'}: {display: 'none'};
  
    const handleChange = (e) => {
      // 搜索框内容改变时的逻辑
      setQuery(e.currentTarget.value)
      handleQuery(e.currentTarget.value)
    };
    const clearQuery = () => {
       // 清空框内容的逻辑
      setQuery ('');
      handleQuery('')
      queryRef.current.focus();
    }
    // 对焦光标
    useEffect(()=>{
        queryRef.current.focus();
     })
    return (
      <SearchBoxWrapper>
        <i className="iconfont icon-back" onClick={() => props.back ()}><Icon type='left'  color='#ffffff'/></i>
            <input ref={queryRef} className="box" placeholder="搜索" value={query} onChange={(e)=>handleChange(e)}/>
        <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>X</i>
      </SearchBoxWrapper>
    )
  };
  
 
export default SearchBox