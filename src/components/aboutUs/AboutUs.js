import React from "react";
import InnerNews from "../innerNews/InnerNews";
import "./About.css";


const AboutUs = () => {
    return (
       <div className="about-us">
            <InnerNews   display={true} text={"ჩვენს შესახებ"}/>
            <InnerNews navigation={true}  text={"წესდება"}/>
       </div>
        
    )
}

export default AboutUs;