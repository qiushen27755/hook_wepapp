import React,{useState,useEffect} from 'react';
import {Top ,Content } from './styles'
import Swiper from '../../component/slider'
import Scroll from '../../ui/scroll'
import IndexHome from '../index'
import { renderRoutes } from "react-router-config";
import {Grid } from 'antd-mobile'
function LoginHome(props){
    const {route,history}=props
    const [grid,setGrid]=useState(true)
    useEffect(()=>{
        setGrid(true)
    },[])


    const enterModules=(e)=>{
              setGrid(false)
              history.push (`/${e}`)
    }

    return(
    <div>
           
                        {/* 轮播图 做好的组件,需要可以使用,支持单图 组图 */}
                        {/* <Swiper swiperList={data}/> */}
                        {
                            grid ? <Grid data={dataGrid} columnNum={3} 
                                    onClick={(el,index)=> 
                                        enterModules(el.link) } />
                            : null
                        }
             {renderRoutes(route.routes)}
    </div>
    )
}
export default LoginHome
const data=[{"imageUrl":"http://p1.music.126.net/ltyDiX-8wrIBU8um3Bk1zw==/109951164763663004.jpg"} ] 
const data2=[{"imageUrl":"http://p1.music.126.net/ltyDiX-8wrIBU8um3Bk1zw==/109951164763663004.jpg"},
            {"imageUrl":"http://p1.music.126.net/Xm0Mc0cN1RiIcJT_m19Lqw==/109951164770392390.jpg"},
            {"imageUrl":"http://p1.music.126.net/Xy_HQ2zawdDn4MmHDXifKQ==/109951164770401858.jpg"},
            {"imageUrl":"http://p1.music.126.net/_LGWG10yU1OFIoJkGwKh3Q==/109951164770408377.jpg"},
            {"imageUrl":"http://p1.music.126.net/-2svirgGqP2rM0pH0Zj7JQ==/109951164770861033.jpg"}]
const dataGrid = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'http://172.16.59.195:1119/fs/service/default/ufiles/819af11f-5c93-4e40-899a-26aed3e0781e?isView=true',
    text: `核销认领${i}`,
    link: 'certClaimed'
    }));