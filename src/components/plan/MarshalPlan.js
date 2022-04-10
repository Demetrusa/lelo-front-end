import React from "react";
import Button from "../button/Button";
import "./MarshalPlan.css";
import buttonLogo from "../../images/economic.svg"
import buttonLogo2 from "../../images/Group143.png"
import buttonLogo3 from "../../images/Group143.png"
import buttonLogo4 from "../../images/Group143.png"
import buttonLogo5 from "../../images/Group143.png"
import buttonLogo6 from "../../images/Group143.png"
import MainText from "../maintext/MainText";
import Contact from "../contact/Contact";

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
            <MainText />
        </div>
    )
}

export default MarshalPlan;
