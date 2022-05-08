import React from "react";
import TextContent from "../text-content/TextContent";
import  "./Newcontent.css"
import parlament from "../../images//Rectangle 91.svg"
import coliseum from "../../images/Rectangle 171.svg"
import stairs from "../../images/Rectangle 173.svg"
import MoreButton from "../readMoreButton/MoreButton";
import ReadMore from "../readMoreButton/ReadMore";
import { useNavigate } from "react-router-dom";

const Newcontent = () => {
    const navigate = useNavigate();

    const NewPageContent = () => {
        navigate('/NewPageContent')
    }
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
            <div className="moreRead" onClick={NewPageContent}>
               <ReadMore />
            </div>
        </div>
    )
}

export default Newcontent;