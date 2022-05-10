import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../images/Layer_-1.svg";
import globe from "../../images/globe.svg";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Navigation = ({ flex }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const TeamContent = () => {
    navigate('/team')
}

    const navigateMore = () => {
        navigate('/news')
    }

    const AboutUS = () => {
        navigate('/aboutUS')
    }
     const NewPageContent = () => {
        navigate('/NewPageContent')
    }
    const donationPagePath = () =>{
      navigate('/donation')
    }
    const register = () => {
      navigate('/register')
    }
    const home =() =>{
      navigate('/')
    }
  return (
    <div className={flex ? "flex" : "nav"}>
      <div className="nav-image">
        <img src={logo} alt="showLogo" onClick={home}/>
      </div>
      <div className="navigation">
        <div className="globe-logo">
          <img src={globe} alt="show globe" id="nav-logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a onClick={home}>მთავარი</a>
            </li>
            <li>
              <a  onClick={navigateMore}>სიახლეები</a>{" "}
            </li>
            <li>
              <a  onClick={TeamContent}>გუნდი</a>{" "}
            </li>
            <li>
              <a onClick={AboutUS}>ჩვენს შესახებ</a>
            </li>
            <li>
              <a  onClick={donationPagePath}>დონაცია</a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={register}>შემოგვიერთდით</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
   
          <div>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
      </div>
      {open && (
        <div className="hidden-menu">
          <nav>
            <ul>
              <li>
                <a href="/">მთავარი</a>
              </li>
              <li>
                <a href="/news">სიახლეები</a>{" "}
              </li>
              <li>
                <a href="/team">გუნდი</a>{" "}
              </li>
              <li>
                <a href="/aboutUS">ჩვენს შესახებ</a>
              </li>
              <li>
                <a href="/donation">დონაცია</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/register">შემოგვიერთდით</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navigation;
