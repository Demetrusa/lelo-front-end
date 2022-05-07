import React from "react";
import AboutUs from '../aboutUs/AboutUs.js';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Newcontent from '../news/Newcontent';
import NewPageContent from '../newsContent/NewPageContent';
import MarshalPlan from '../plan/MarshalPlan';
import Team from '../team/Team';
import TextContent from '../text-content/TextContent';
import MainText from "../maintext/MainText.js";
import mainTextImg from "../../images/Rectangle 155.svg"
import mainTextBG from "../../images/Rectangle 206.png";
import FirstPage from "../firsPage/FirsPage.js";
import DonationBox from "../donation/DonationBox.js";
import News from "../news/Newcontent.js"
import InnerNews from "../innerNews/InnerNews.js";
import Register from "../registration/Register.js";
import FormApp from "../form/FormApp.js";

const MainPage = ({data}) => {
    return (
        <div className="main-page-content">
      <FirstPage /> {/* აქ უნდა გადმოვიდეს <InnerNews /> */}
      <Newcontent /> {/*  აქ უნდა გადავიდეს <NewPageContent /> */}

      <MarshalPlan />
      <MainText  image={mainTextImg} text={"ჩვენს შესახებ"}/> {/* აქ უნდა გადმოვიდეს<AboutUs /> */}
      <Team data={data}/>
      <MainText  image={mainTextBG } background={true}  text={"შიდა არჩევნები"}/>
      <Contact />
      <Footer />
    
        </div>
    )
}

export default MainPage;