import React from 'react';
import OrderListView from '../../component/listview'

function Claiming(props){
    return(
        <div>
            <OrderListView history={props.history} route={props.route} state={1}></OrderListView>
        </div>
     )
}

export default Claiming