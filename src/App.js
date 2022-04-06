import './App.css';
import Main from './components/main/Main';
import Newcontent from './components/news/Newcontent';
import TextContent from './components/text-content/TextContent';

function App() {
  return (
    <div className='app'>
      <Main />
      <Newcontent />
      {/* <TextContent /> */}
    </div>
  );
}

export default App;
