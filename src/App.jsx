import "./App.css";
import Header from "./Containers/Header/Header";
import LocationMap from "./Containers/LocationMap/LocationMap";
import WeatherData from "./Components/WeatherData/WeatherData";
import LocationService from "./Components/LocationService/LocationService";
import LocationCard from "./Containers/LocationCard/LocationCard";
import SailingLocations from "./Containers/SailingLocations/SailingLocations";
import CurrentLocation from "./Components/CurrentLocation/CurrentLocation";

function App() {
  return (
    <div className="App">
      <Header />
      <SailingLocations />
      <CurrentLocation />
    </div>
  );
}

export default App;
