import React, {Fragment} from "react";

const Item = (props) => {
    return(
        <Fragment>
           <li id={props.order.id}>{props.order.order} Rs. {props.order.prize}</li> 
           <button id={props.order.id} type="button" onClick={props.onDelete}>Delete</button>
        </Fragment>
    )
}
export default Item;