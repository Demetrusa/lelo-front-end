import React from "react";
import "./Button.css";

const Button = ({text, image}) => {
    return(
        <div className="btn4">
            <img src={image} />
            <a className="btn" href="#">{text}</a>
        </div>
    )
}
export default Button;
