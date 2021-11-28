import React, {Fragment} from "react";
import "./Card.css";

const Card = (props) => {
    const classes="card "+props.className;
    return <div className={classes}on>{props.children}</div>
}
export default Card;