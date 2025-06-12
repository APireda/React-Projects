import './App.css';
import data from "./components/accordion/data";
import menus from './components/tree-view/data';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';


function App() {
  return (
    <div className="App">
      {/* <Accordion data={data}/> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"}/> */}
      {/* <LoadMoreData url={'https://dummyjson.com/products?limit=20'} /> */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
