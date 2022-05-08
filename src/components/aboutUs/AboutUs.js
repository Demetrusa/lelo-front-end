import React from "react";
import InnerNews from "../innerNews/InnerNews";
import "./About.css";

import { useNavigate } from "react-router-dom";


const AboutUs = () => {
    const navigate = useNavigate();

    const AboutUS = () => {
        navigate('/aboutUS')
    }
    return (
       <div className="about-us">
            <InnerNews   display={true} text={"ჩვენს შესახებ"}/>
            <InnerNews navigation={true}  text={"წესდება"}/>
       </div>
        
    )
}

export default AboutUs;