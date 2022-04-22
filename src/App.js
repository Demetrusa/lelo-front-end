import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import InnerNews from './components/innerNews/InnerNews';
import Newcontent from './components/news/Newcontent';
import NewPageContent from './components/newsContent/NewPageContent';
import MarshalPlan from './components/plan/MarshalPlan';
import Team from './components/team/Team';
import TextContent from './components/text-content/TextContent';
import {Routes, Route} from "react-router-dom"
import MainPage from './components/mainPage/MainPage';

function App({data}) {
  return (
    <div className='app'>
      <Routes>
      <Route exact path="/" element={ <MainPage data={data}/>} />
      <Route path="/more-teams" element={<Team data={data}/>} />
      {/* <NewPageContent/> */}
       {/* <InnerNews text={"ლორემ იპსუმღორებმა შევჩერდი"} /> */}
      {/* <AboutUs /> */}
      {/* <Team /> */}
      </Routes>
    </div>
  );
}

export default App;
