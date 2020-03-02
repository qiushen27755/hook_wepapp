import styled from 'styled-components';
import style from '../../assets/global-style';
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${props => props.play > 0 ? "60px": 0};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #f2f3f4;
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear{
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
`
export const ShortcutWrapper = styled.div`
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  display: ${props => props.show ? "": "none"};
`

 
 export const ConItem=styled.ul`
 >li{
   display: flex;
   height: 60px;
   align-items: center;  
   .index{
     width: 60px;
     height: 60px;
     line-height: 60px;
     text-align: center;
   }
   .info{
     box-sizing: border-box;
     flex: 1;
     display: flex;
     height: 100%;
     padding: 5px 0;
     flex-direction: column;
     justify-content: space-around;
     border-bottom: 1px solid ${style["border-color"]};
     >span:first-child{
       color: ${style["font-color-desc"]};
     }
     >span:last-child{
       font-size: ${style["font-size-s"]};
       color: #bba8a8;
     }
   }
 }
`