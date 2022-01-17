import Drawer from "./components/Drawer"
import {Routes, Route} from "react-router-dom"

import {useState, useEffect} from "react"
import axios from "axios"
import Main from "./pages/Main"
import Forecast from "./pages/Forecast"
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"
import Loader from "react-loader-spinner";

function App (){

  // Глобальный стейт с активным городом на данный момент
  const [activeCity, setActiveCity] = useState("London");
  const [loader, setLoader] = useState(true);
  // массив городов
  const [cityCardArr, setCityCardArr] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  });
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");

  // ========== ПОЛУЧАЕМ ИНФОРМАЦИЮ О ГОРОДАХ 1 РАЗ ================
  useEffect(()=>{
    axios.get("https://mocki.io/v1/6ef5917c-9948-43ab-9cab-fc7d62a6b9c6")
      .then(responce => {
        setCityCardArr(responce.data);
        setLoader(false);
        console.log(responce.data)})
      .catch(err => alert(err));
  }, []);


  // Запросы к серверам при изменении активного города
  useEffect(() => {
    setLoader(true);
    getWeather(activeCity);
    getCurrentTimeAndDate(activeCity);
  }, [activeCity]);

  
 

  // ============= ПОЛУЧЕНИЕ ДАТЫ/ВРЕМЕНИ В ВЫБРАННОМ ГОРОДЕ ================
  const getCurrentTimeAndDate = (activeCity) => {
    const API_KEY = "890025aa3df54faeb484c73fc6dca97e";
    axios.get(`https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&location=${activeCity}`)
    .then((responce) => {
      setCurrentDate(responce.data.date);
      setCurrentTime(responce.data.time_24);
      setCurrentDateTime(responce.data.date_time_wti);
      setLoader(false);
      console.log(responce);})
      .catch((err) => alert(err));

  }

  // ============== ПОЛУЧЕНИЕ ПОГОДЫ В ВЫБРАННОМ ГОРОДЕ =====================
  const getWeather = (activeCity) => {
    // open weather
    const API_KEY = "8459744fe826f74f3d531b5bfb2929de";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${activeCity}&appid=${API_KEY}&lang=ru&units=metric`)
    .then(responce => {
      setCurrentWeather(responce.data);
      setLoader(false);
      console.log(responce.data);
    }).catch(err => alert(err));
  }

  const changeActiveCity = (title) => {
    setActiveCity(title);
  }

  return(
      <div className="container">

        {/* Индикатор загрузки данных */}
        {loader && <Loader
            className="loader"
            type="Puff"
            color="#6a58f3"
            height={200}
            width={200}
          />}

        <div className="drawerContainer">
          <Drawer activeCity={activeCity} currentWeather={currentWeather} currentDate={currentDate} currentTime={currentTime}/>
        </div>
        

        <div className="routesContainer">
          <Routes>
            <Route exact path="/" element={<Main activeCity={activeCity} cityCardArr={cityCardArr} currentWeather={currentWeather} currentDateTime={currentDateTime} changeActiveCity={changeActiveCity} />}></Route>
            <Route path="/forecast" element={<Forecast cityCardArr={cityCardArr} />}></Route>
            <Route path="/statistics" element={<Statistics />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
  )
}

export default App