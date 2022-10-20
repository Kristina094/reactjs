import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';



function App() {

  const handleOnSearchChange=(searchData)=>{
    const[lat, lon]= searchData.value.split(" ");

    const currentWeatherFeth = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)


    api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

  }
  return (
  <div className='container'>
    <Search onSearchChange={handleOnSearchChange}/>
    <CurrentWeather/>
  </div>
  );
}

export default App;
