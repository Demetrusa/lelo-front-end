import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import Button from "../button/Button";
import MoreButton from "../readMoreButton/MoreButton";
import "./Contact.css";

const Contact = () => {
    return(
        <div className="contact-wrap">
            <div className="contact-left-wrap">
                <div className="left-wrap-content">
                    <div className="contact-left-text">
                        <div className="cotact-circle"></div>
                        <h2>კონტაქტი</h2>
                    </div>
                    <div className="contact-info">
                        <h3>სამუშაო განრიგი: ორშაბათი - პარასკევი, 10:00 - 19:00</h3>
                        <h3>თბილისი, ცენტრალი</h3>
                        <h3>ტელეფონი <span id="number-span"> <a href="tel:032 223 22 88">032 223 22 88</a></span> </h3>
                        <h3>ელ.ფოსტა <span id="email-span"> <a href="mailto:info@lelo2020.com">info@lelo2020.com</a> </span></h3>
                    </div>
                 
                </div>
            </div>
            <div className="contact-right-wrap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.9661544756336!2d44.79711531543621!3d41.72124917923494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d331ec6d1e9%3A0xe3dde2b6b7273cbf!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOYIOGDquGDlOGDnOGDouGDoOGDkOGDmuGDmA!5e0!3m2!1ska!2sge!4v1649594533084!5m2!1ska!2sge" frameborder="0" height="558px" 
            ></iframe>
            </div>
        </div>
    )
}

export default Contact;