import React from "react";
import Button from "../button/Button";
import "./MarshalPlan.css";
import buttonLogo from "../../images/economic.svg"
import buttonLogo2 from "../../images/Group143.png"
import buttonLogo3 from "../../images/Group143.png"
import buttonLogo4 from "../../images/Group143.png"
import buttonLogo5 from "../../images/Group143.png"
import buttonLogo6 from "../../images/Group143.png"

const MarshalPlan = () => {
    return (
        <div className="plan-text">
            <div className="plan-heading">
                <h2>ლელოს <span>მარშალის გეგმა</span></h2>
            </div>
            <div className="donation">
                {/* <Btn  color={"#FFCA05"}>ეკონომიკა</Btn>
                <Btn >უსაფრთხოება</Btn>
                <Btn >კულტურა და ჯანდაცვა</Btn>
                <Btn  >განათლება</Btn>
                <Btn >კულტურა და ჯანდაცვა</Btn>
                <Btn  >განათლება</Btn> */}
                <Button text="ეკონომიკა" image={buttonLogo}/>
                <Button text="ეკონომიკა"/>
                <Button text="ეკონომიკა"/>
                <Button text="ეკონომიკა"/>
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
            <div className="team-section">
                <div className="team-text-content">
                    <div className="team-heading">   
                        <div className="circle2"></div>
                        <h2>ჩვენს შესახებ</h2>
                    </div>
                    <div className="text-side">
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s 
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
                <div className="team-bg-img">

                </div>
            </div>
        </div>
    )
}

export default MarshalPlan;
//     background-color: ${(props) => (props.color ? "#FFCA05": "#FFFFFF")}