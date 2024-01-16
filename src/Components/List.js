import React, {Fragment} from "react";

const List  = (props) => {
    console.log(props)
    return (
      <Fragment>
        <li id={props.id}>Order: {props.order} Prize: {props.prize} </li>
        <button id={props.id} type="submit">Delete</button>
        </Fragment>
    )
}

export default List;
