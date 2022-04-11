import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Newcontent from './components/news/Newcontent';
import NewPageContent from './components/newsContent/NewPageContent';
import MarshalPlan from './components/plan/MarshalPlan';
import TextContent from './components/text-content/TextContent';

function App() {
  return (
    <div className='app'>
      <Main />
      <Newcontent />
      <MarshalPlan />
      <Contact />
      <Footer />
      <NewPageContent/>
    </div>
  );
}

export default App;
