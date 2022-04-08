import './App.css';
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
    </div>
  );
}

export default App;
