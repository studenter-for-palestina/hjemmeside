import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Body from "./Components/Body.jsx"
import Footer from "./Components/footer.jsx"
import ImageSlider from "./Components/Imageslider.jsx"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen" >
      <Navbar />
      <ImageSlider />
      <Body /> 
      <Footer /> 
    </div>
  );
};

export default App
