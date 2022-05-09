import React from "react";
import mainImg from "../../images/Rectangle122.svg"
import MainText from "../maintext/MainText";
import Navigation from "../navigation/Navigation";
import MoreButton from "../readMoreButton/MoreButton";
import "./FirstPage.css";
import { useNavigate } from "react-router-dom";


const FirstPage = () => {
    const navigate = useNavigate();

    const navigateMore = () => {
        navigate('/news')
    }
    return(
        <>
        <div className="nav-wrap">    <Navigation /></div>
        <div className="firstPage">
            <div className="first-page-content">
                <div className="firstPageWrap">
                    <div className="firstpage-heading">
                        <div className="circleMark"></div>
                        <h2 className="first-heading">გაეცანით მარშალის გეგმას</h2>
                    </div>
                    <div className="first-text-side">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s 
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
                    <div className="button-padding" onClick={navigateMore}>
                    <MoreButton text={"ვრცლად"} width="true"/>
                    </div>
                </div>
            </div>
            <div className="firstPage-bg">
                <img src={mainImg} alt="image" className="firstpage-bg-image" />
            </div>
        </div>
        </>
    )
}
export default FirstPage;