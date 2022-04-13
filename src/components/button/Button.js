import React from "react";
import "./Button.css";

const Button = ({text, image, flex}) => {
    return(
        <div className={flex ? "displayBox" : "btn4"}>
            <img src={image} />
            <a className="btn" href="#">{text}</a>
        </div>
    )
}
export default Button;
