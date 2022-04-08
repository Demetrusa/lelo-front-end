import React from "react";
import "./Button.css";

const Button = ({text}) => {
    return(
        <div className="button">
            <a className="btn" href="#">{text}</a>
        </div>
    )
}
export default Button;
