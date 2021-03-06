import React from "react";
import Button from "../button/Button";
import "./MarshalPlan.css";
import buttonLogo from "../../images/economic.svg"
import MainText from "../maintext/MainText";
import Contact from "../contact/Contact";
import mainTextImg from "../../images/Rectangle 155.svg";
import mainTextBG from "../../images/Rectangle 206.png";
import DonationBox from "../donation/DonationBox";

const MarshalPlan = () => {
    return (
        <div className="plan-text">
            <div className="plan-heading">
                <h2>ლელოს <span id="heading-color">მარშალის გეგმა</span></h2>
            </div>
            <div className="donation">
  
                <Button text="ეკონომიკა"/>
                <Button text="უსაფრთხოება"/>
                <Button text="კულტურა"/>
                <Button text="განათლება"/>
                <Button text="ჯანდაცვა"/>
                <Button text="ტურიზმი"/>
            </div>
            <div className="donate-wrap"><DonationBox />
            </div>
        </div>
    )
}

export default MarshalPlan;
