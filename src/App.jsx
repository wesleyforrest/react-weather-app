import "./App.css";
import Header from "./Containers/Header/Header";
import LocationMap from "./Containers/LocationMap/LocationMap";
import WeatherData from "./Components/WeatherData/WeatherData";
import LocationService from "./Components/LocationService/LocationService";

function App() {
  return (
    <div className="App">
      <Header />
      <LocationMap />
      <LocationService />
      <WeatherData />
    </div>
  );
}

export default App;
