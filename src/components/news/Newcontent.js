import React from "react";
import TextContent from "../text-content/TextContent";
import  "./Newcontent.css"
import contentImg from "../../images//Rectangle 91.svg"
import contentImg2 from "../../images/Rectangle 171.svg"
import contentImg3 from "../../images/Rectangle 173.svg"

const Newcontent = () => {
    return (
        <div className="newsInfo">
            <div className="newsContent">
                <div className="circle"></div>
                <h2>სიახლეები</h2>
            </div>
            <div className="content-Boxes">
                <TextContent
                 logo={contentImg} 
                 title={'ლორემ იპსუმღორებმა'}
                />
                <TextContent 
                logo={contentImg2}
                title={'ლორემ იპსუმღორებმა შევჩერდი '}/>
                <TextContent
                title={'ლორემ იპსუმღორებმა შევჩერდი'}
                 logo={contentImg3}/>
            </div>
            <div className="moreRead">
                <button className="btn3">მეტის ნახვა</button>
            </div>
        </div>
    )
}

export default Newcontent;