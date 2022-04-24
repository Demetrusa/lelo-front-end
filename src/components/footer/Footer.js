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
                    <a href="#" id="footer-contact-heading">კონტაქტი</a>
                    <div className="lelo-logo">
                        <img src={footerImg} alt="footer-img" className="footer-image" />
                        <h2>ლელო</h2>
                    </div>
                <div className="footer-icons">
                    <div className="footer-border-div"><a href="#"><img src={facebookImg} alt="fb-icon" className="footerIcons"/></a> </div>
                    <div className="footer-border-div"><a href="#"><img src={linkedinImg} alt="linkden icon"  className="footerIcons" id="linkden-img" /></a></div>
                    <div className="footer-border-div"><a href="#"><img src={twitterImg} alt="twitter icon"className="footerIcons" /></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;