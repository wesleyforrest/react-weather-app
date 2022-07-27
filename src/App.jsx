import "./App.css";
import Header from "./Containers/Header/Header";
import LocationMap from "./Containers/LocationMap/LocationMap";
import WeatherData from "./Components/WeatherData/WeatherData";
import LocationService from "./Components/LocationService/LocationService";
import LocationCard from "./Containers/LocationCard/LocationCard";

function App() {
  return (
    <div className="App">
      <Header />
      <LocationCard />
      <LocationMap />
      <LocationService />
      <WeatherData />
    </div>
  );
}

export default App;
