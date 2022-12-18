
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import "./App.css";
import MainRoutes from "./Routes/MainRoutes";



function App() {
  return (
    <div className="App">

      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
