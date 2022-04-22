import React from "react";
import "./DonatioBox.css";

const DonationBox = () => {
    return(
        <div className="donation-wrap">
            <h2>დონაცია</h2>
            <div className="choose-wrap">
                <button>10</button>
                <button>20</button>
                <button>50</button>
                <button>100</button>
            </div>
        </div>
    )
}

export default DonationBox;