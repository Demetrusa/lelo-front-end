import React from "react";
import "./MainText.css";
import mainTextImg from "../../images/Rectangle 155.svg";


const MainText = ({image,background,text }) =>{
    return(
        <div className={background ? "main-wrap" : "team-section"} >
                <div className="team-text-content">
                    <div className="team-heading">   
                        <div className="circle2"></div>
                        <h2 className={background ? "color" : "Maintext-heading"}>{text}</h2>
                    </div>
                    <div className="text-side">
                    <p className={background ? "color-text" : "maintext-info-color"}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of <span className="moreText">Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.  Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here,
                        content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                        as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
                        </span></p>
                    </div>
                    <button className="team-read-more">ვრცლად</button>
                </div>
                <div className="team-bg">
                    <img src={image} alt="write img" className="team-bg-image"/>
                </div>
            </div>
    )
}

export default MainText;