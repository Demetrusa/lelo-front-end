import React from "react";
import Button from "../button/Button";
import "./MarshalPlan.css";
import buttonLogo from "../../images/Group143.png"
import buttonLogo2 from "../../images/Group143.png"
import buttonLogo3 from "../../images/Group143.png"
import buttonLogo4 from "../../images/Group143.png"
import buttonLogo5 from "../../images/Group143.png"
import buttonLogo6 from "../../images/Group143.png"
import { Btn } from "../button/Btn.style";

const MarshalPlan = () => {
    return (
        <div className="plan-text">
            <div className="plan-heading">
                <h2>ლელოს <span className="plan-text">მარშალის გეგმა</span></h2>
            </div>
            <div className="donation">
                <Btn  color={"#FFCA05"}>ეკონომიკა</Btn>
                <Btn >უსაფრთხოება</Btn>
                <Btn >კულტურა და ჯანდაცვა</Btn>
                <Btn  >განათლება</Btn>
                <Btn >კულტურა და ჯანდაცვა</Btn>
                <Btn  >განათლება</Btn>
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
//     background-color: ${(props) => (props.color ? "#FFCA05": "#FFFFFF")}