import "./App.css";
import Header from "./Containers/Header/Header";
import LocationMap from "./Containers/LocationMap/LocationMap";
import WeatherData from "./Components/WeatherData/WeatherData";

function App() {
  console.log("working");
  return (
    <div className="App">
      <Header />
      <LocationMap />
      <WeatherData />
    </div>
  );
}

export default App;
