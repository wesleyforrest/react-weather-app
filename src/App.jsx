import "./App.css";
import Header from "./Containers/Header/Header";
import SailingLocations from "./Containers/SailingLocations/SailingLocations";
import CurrentLocation from "./Components/CurrentLocation/CurrentLocation";
import LocationCard from "./Containers/LocationCard/LocationCard";
import Footer from "./Containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentLocation />
      <SailingLocations />
      <Footer />
    </div>
  );
}

export default App;
