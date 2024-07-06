import React from "react";
import "./List.css";

const List = (props) => {
    return (
        <div className="wrapper">
            {props.text}
            <div>{props.children}</div>
        </div>
    )
}

export default List;