import React from "react";
import "./Navigation.css"
import logo from "../../images/Layer_-1.svg"
import globe from "../../images/globe.svg"
import Button from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const globeLogo = <FontAwesomeIcon icon="fa-solid fa-globe" />

    return (
        <div className="nav">
            <div className="nav-image">
                <img src={logo} alt="showLogo" /> 
            </div>
                <div className="navigation">
                    <div className="globe-logo">
                        <img src={globe} alt="show globe"  id="nav-logo" />
                    </div>
                    <nav>
                        <ul>
                            <li>მთავარი</li>
                            <li>სიახლეები</li>
                            <li>სტრუქტურა</li>
                            <li>წესდება</li>
                            <li>არჩევნები</li>
                            <li><a href="">დონაცია</a> </li>
                            <li> <a href="">შემოგვიერთდით</a></li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default Navigation;