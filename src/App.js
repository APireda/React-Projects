import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import data from "./components/accordion/data"


function App() {
  return (
    <div className="App">
      {/* <Accordion data={data}/> */}
      <RandomColor />
    </div>
  );
}

export default App;
