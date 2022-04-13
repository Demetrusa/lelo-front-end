import React from "react";
import Button from "../button/Button";
import "./MarshalPlan.css";
import buttonLogo from "../../images/economic.svg"
import MainText from "../maintext/MainText";
import Contact from "../contact/Contact";
import mainTextImg from "../../images/Rectangle 155.svg";
import mainTextBG from "../../images/Rectangle 206.png";

const MarshalPlan = () => {
    return (
        <div className="plan-text">
            <div className="plan-heading">
                <h2>ლელოს <span id="heading-color">მარშალის გეგმა</span></h2>
            </div>
            <div className="donation">
  
                <Button text="ეკონომიკა" image={buttonLogo}/>
                <Button text="უსაფრთხოება"/>
                <Button text="კულტურა და ჯანდაცვა"/>
                <Button text="განათლება"/>
                <Button text="ეკონომიკა"/>
                <Button text="ეკონომიკა"/>
            </div>
            <div className="donation-calculator">
                <div className="calculator-title">
                    <h2>დონაცია</h2>
                </div>
                <div className="donation-example">
                    <div className="donation-amount">
                        <div>10</div>
                        <div>20</div>
                        <div>50</div>
                        <div>100</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarshalPlan;
