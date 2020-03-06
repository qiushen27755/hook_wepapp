import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import {dateToLocalString} from '../../api/utils';
function RenderRow(props){
     const {item,id}=props
    const {pk_pay,time,cust_name,money,type,status}=item
          return (
            <div key={pk_pay+id}>
              <WingBlank size="lg">
                <WhiteSpace size="lg" />
                  <Card onClick={() => props.enterDetail(pk_pay)}>
                    <Card.Header
                      title= {type}
                      extra={<span style={{"fontSize":"12px","float":"right","color":"#B8860B"}}>{pk_pay}</span>}
                      />
                    <Card.Body>
                      <div >
                          {cust_name}付款
                          <span style={{marginLeft:"3px",fontSize:"10px",
                                    backgroundColor:"#8EE5EE",color:"#595959",float:'right'}}>{''} {status}{''} </span>
                          <div style={{"marginTop":"5px"}}>
                              <span style={{color:"green",float:'right'}}>{money}元</span>
                          </div>
                        </div>
                    </Card.Body>
                    <Card.Footer content="支付日期" extra={dateToLocalString(time)} />
                  </Card>
                 <WhiteSpace size="lg" />
              </WingBlank>
            </div>
      );
}

 
export default RenderRow;