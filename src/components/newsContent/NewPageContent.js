import React from "react";
import Navigation from "../navigation/Navigation";
import "./NewPageContent.css"
import eclipse from "../../images/Ellipse 62.png"
import searchIcon from "../../images/Icon feather-search.png"
import TextContent from "../text-content/TextContent";
import parlament from "../../images//Rectangle 91.svg"
import coliseum from "../../images/Rectangle 171.svg"
import stairs from "../../images/Rectangle 173.svg"
import britishParlament from "../../images/Rectangle 178.svg"
import newSpaper from "../../images/Rectangle 180.svg"
import wallImg from "../../images/Rectangle 179.svg"
import Button from "../button/Button";
import Footer from '../../components/footer/Footer';

const NewPageContent = () => {
    return(
        <div className="ContentPage">
            <Navigation flex="true"/>
            <div className="Contact-Main-wrapper">
                <div className="cont-text">
                    <div className="circle-logo">
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
                <div className="News-content">
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry’s 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book.</p>
                </div>
                <div className="empty-boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="new-text-boxes">
                    <TextContent
                    logo={ parlament} 
                    title={'ლორემ იპსუმღორებმა შევჩერდი'}
                    />
                    <TextContent 
                    logo={ coliseum}
                    title={'ლორემ იპსუმღორებმა შევჩერდი '}/>
                    <TextContent
                    title={'ლორემ იპსუმღორებმა შევჩერდი'}
                    logo={stairs}/>
                    <TextContent
                    logo={ newSpaper} 
                    title={'ლორემ იპსუმღორებმა'}
                    />
                    <TextContent 
                    logo={ britishParlament}
                    title={'ლორემ იპსუმღორებმა შევჩერდი '}/>
                    <TextContent
                    title={'ლორემ იპსუმღორებმა შევჩერდი'}
                    logo={wallImg }/>
                </div>
                <div id="sigh-more-button"> 
                    <button className="contact-button">მეტის ნახვა</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default NewPageContent;