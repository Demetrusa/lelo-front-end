import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Newcontent from './components/news/Newcontent';
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
    </div>
  );
}

export default App;
