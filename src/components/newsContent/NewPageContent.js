import React from "react";
import Navigation from "../navigation/Navigation";
import "./NewPageContent.css"
import eclipse from "../../images/Ellipse 62.png"
import searchIcon from "../../images/Icon feather-search.png"

const NewPageContent = () => {
    return(
        <div className="ContentPage">
            <Navigation flex="true"/>
            <div className="Contact-Main-wrapper">
                <div className="cont-text">
                    <div className="circle-logo">
                        {/* <img src={eclipse} alt="eclipse must be here" id="eclipse" /> */}
                        <div className="logo-eclipse"></div>
                        <h2>სიახლეები</h2>
                    </div>
                    <div className="search-form">
                        <form role="search" id="form">
                            <img src={searchIcon} alt="searchloop" id="searchloop" />
                            <input type="search" id="query" 
                            name="search" placeholder="ძებნა" 
                            aria-label="Search through site content"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewPageContent;