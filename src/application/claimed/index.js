import React from 'react'
import OrderListView from '../../component/listview'
function Claimed(props){
     return(
        <div>
            <OrderListView history={props.history} route={props.route} state={3}></OrderListView>
        </div>
    )
}
export default Claimed