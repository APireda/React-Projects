import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import data from "./components/accordion/data";


function App() {
  return (
    <div className="App">
      {/* <Accordion data={data}/> */}
      {/* <RandomColor /> */}
      <StarRating />
    </div>
  );
}

export default App;
