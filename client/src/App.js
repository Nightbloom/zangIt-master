import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import About from "./pages/AboutPage";
import Payment from "./pages/Payment";
import TestProcuts from "./pages/TestProducts"


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path='/products' component = {TestProcuts}/>
      <Route path='/checkout' component = {Checkout}/>
      <Route path='/payment' component = {Payment}/>
      <Route path='/about' component={About}/>
      
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
