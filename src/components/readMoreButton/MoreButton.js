import React from "react";
import "./ReadMore.css"


const MoreButton = ({text}) =>{
    return(
        <div className="more-moreButton">
            <button className="moreButton">{text}</button>
        </div>
    )
}
export default MoreButton;