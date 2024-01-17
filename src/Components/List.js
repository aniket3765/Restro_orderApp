import React, {Fragment} from "react";
import Item from "./Item";

const List  = (props) => {
    return (
      <Fragment>

        {props.orderList.map((order) => {return (
          <Item order={order} onDelete={props.onDelete}></Item>
        )})}
        </Fragment>
    )
}

export default List;
