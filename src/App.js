import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/Products/Product";
import Virtual from "./components/Virtual/Virtual";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Product/>
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default App;
