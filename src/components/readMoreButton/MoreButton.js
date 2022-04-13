import React from "react";
import "./ReadMore.css"


const MoreButton = ({text}) =>{
    return(
        <div className="more-moreButton">
            <button id="moreButton">{text}</button>
        </div>
    )
}
export default MoreButton;