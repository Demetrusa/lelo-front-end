import React from "react";
import "./Footer.css"
import footerImg from "../../images/footerImg.png"
import facebookImg from "../../images/Icon awesome-facebook-f.svg"
import linkedinImg from "../../images/Icon awesome-linkedin-in.svg"
import twitterImg from "../../images/Icon awesome-twitter.svg"

const Footer  = () => {
    return (
        <div className="footer-wrap">
            <div className="footer-content">
                    <h2>კონტაქტი</h2>
                    <div className="lelo-logo">
                        <img src={footerImg} alt="footer-img" className="footer-image" />
                        <h2>ლელო</h2>
                    </div>
                <div className="footer-icons">
                    <div className="footer-border-div"><img src={facebookImg} alt="fb-icon" className="footerIcons"/></div>
                    <div className="footer-border-div"><img src={linkedinImg} alt="linkden icon"  className="footerIcons" id="linkden-img" /></div>
                    <div className="footer-border-div"><img src={twitterImg} alt="twitter icon"className="footerIcons" /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;