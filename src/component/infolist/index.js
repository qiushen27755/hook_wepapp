import React from 'react'
import {InputItem,List,TextareaItem} from 'antd-mobile'
import {dateToLocalString} from '../../api/utils'

export default function ListInfo(props){
    const {payment,cert}= props//useContext(DataContext)
    const {pk_pay,type,time,cust_code,cust_name,money,rec_money,reced_money,status}=payment

    const CertInfo=(item,index)=>{
        const {erp_cert,cust_cert,cert_day,cert_money,dept,rec_money}=item
        console.log(item)
        return(
            <List  key={item+index} renderHeader={() => <span>匹配合同{index+1}</span>}>
               <List.Item  >
                   <ul>
                       <li><InputItem labelNumber={7} disabled value={erp_cert}><span >ERP合同编码</span></InputItem></li>
                       <li><InputItem labelNumber={7} disabled value={cust_cert}><span >客户合同编码</span></InputItem></li>
                       <li><InputItem labelNumber={7} disabled value={dateToLocalString(cert_day)}><span >合同日期</span></InputItem></li>
                       <li><InputItem labelNumber={7} disabled value={cert_money}><span >合同金额</span></InputItem></li>
                       <li><InputItem labelNumber={7} disabled value={dept}><span >部门编号</span></InputItem></li>
                       <li><InputItem labelNumber={7} disabled value={rec_money}><span >已认领金额</span></InputItem></li>
                     </ul>
               </List.Item>
           </List>
       )
    }
    return(
        <div>

         <List renderHeader={() => <span>银行汇款明细</span>}>
            <List.Item>
            <ul>
            <li><InputItem disabled value={pk_pay}><span >收支单号</span></InputItem></li>
                <li><InputItem disabled value={cust_code}><span >客户编码</span></InputItem></li>
                <li><TextareaItem disabled title="客户" value={cust_name} autoHeight /></li>
                <li><InputItem disabled value={type}><span >类型</span></InputItem></li>
                <li><InputItem disabled value={status}><span >状态</span></InputItem></li>
            {status==='部份认领'?<li><InputItem disabled value={rec_money}><span>已认领</span></InputItem></li>:null}
            {status==='部份认领'? <li><InputItem disabled value={reced_money}><span>未认领</span></InputItem></li>:null}
            {status==='完全认领'? <li><InputItem disabled value={rec_money}><span>已认领</span></InputItem></li>:null}
                <li><InputItem disabled value={money}><span>金额</span></InputItem></li>
                <li><InputItem disabled value={dateToLocalString(time)}><span >支付日期</span></InputItem></li>
                
            </ul>
            </List.Item>
        </List>
        {/**合同 */}
        {
            cert?
            cert.map((i,index)=>
                CertInfo(i,index)
            )
            :null
        }
        </div>
    )
}

  

