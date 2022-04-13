import React from "react";
import TextContent from "../text-content/TextContent";
import  "./Newcontent.css"
import parlament from "../../images//Rectangle 91.svg"
import coliseum from "../../images/Rectangle 171.svg"
import stairs from "../../images/Rectangle 173.svg"
import MoreButton from "../readMoreButton/MoreButton";

const Newcontent = () => {
    return (
        <div className="newsInfo">
            <div className="newsContent">
                <div className="circle"></div>
                <h2>სიახლეები</h2>
            </div>
            <div className="content-Boxes">
                <TextContent
                 logo={ parlament} 
                 title={'ლორემ იპსუმღორებმა'}
                />
                <TextContent 
                logo={ coliseum}
                title={'ლორემ იპსუმღორებმა შევჩერდი '}/>
                <TextContent
                title={'ლორემ იპსუმღორებმა შევჩერდი'}
                 logo={stairs}/>
            </div>
            <div className="moreRead">
                <MoreButton text={"ვრცლად"}/>
            </div>
        </div>
    )
}

export default Newcontent;