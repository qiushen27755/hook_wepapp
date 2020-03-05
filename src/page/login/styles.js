import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0em 3em;
  
  background: ${style["theme-color"]};
  &>span {
    line-height: 30px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`
export const Content = styled.div`
position: fixed;
top: 30px;
bottom: 0;
width: 100%;
`