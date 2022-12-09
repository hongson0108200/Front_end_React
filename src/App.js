import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componennts/layout/Header';
import HomePage from './componennts/layout/HomePage';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Shop from "../src/pages/Shop/Shop";
import About from "../src/pages/About/About";

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
