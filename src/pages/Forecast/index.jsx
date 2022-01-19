import Header from "../../components/Header"
import {useState, useEffect} from "react"
import axios from "axios";
import styles from "./Forecast.module.scss"
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
  LineController,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  BarController
);

function Forecast() {

  const API_KEY = "8459744fe826f74f3d531b5bfb2929de";
  const [city, setCity] = useState('{"lat": 51.507351, "lon":-0.127758}');
  const [labels, setLabels] = useState([]);
  const [tempLine, setTempLine] = useState([]);
  const [feelsLike, setFeelsLike] = useState([]);
  const [dewPoint, setDewPoint] = useState([]);

  // запрашиваем прогноз при изменении выбранного города
  useEffect(()=> {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${JSON.parse(city).lat}&lon=${JSON.parse(city).lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`)
      .then(res => {
        console.log(res.data.daily);
        getDateLabels(res.data.daily);
        setTempLine(computeTempLine(res.data.daily));
        setFeelsLike(computeFeelsLikeTemp(res.data.daily));
        setDewPoint(computeDewPoint(res.data.daily));
      }).catch(err => alert(err));
  }, [city]);

  // слушаем селект
  const handleOnChange = (e)=> {
    setCity(e.target.value);
    console.log(city);
  }

   // получаем лейблы - даты
  const getDateLabels = (arr) => {
    const labs = arr.map(item => (new Date(item.dt * 1000).toLocaleDateString("ru-RU")));
    setLabels(labs);
    console.log(labels);
  }

  // расчет для графика температуры
  const computeTempLine = (res) => {
      return res.map((item) => item.temp.day);
  }

  // расчет для графика температуры (ощущается как)
  const computeFeelsLikeTemp = (res) => {
      return res.map((item) => item.feels_like.day);
  }

  // расчет для графика температуры (ощущается как)
  const computeDewPoint = (res) => {
      return res.map((item) => item.dew_point);
  }



  // конфиг графика
  const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: `Температура C`,
      borderColor: '#6a58f3',
      borderWidth: 6,
      fill: true,
      data: tempLine,
    },
    {
      type: 'bar',
      label: 'Ощущается как C',
      backgroundColor: 'rgb(75, 192, 192)',
      data: feelsLike,
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Точка росы',
      backgroundColor: 'rgb(53, 162, 235)',
      data: dewPoint,
    },
  ],
}

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.pageContainer}>
        <h2 className={styles.pageName}>Прогноз в 
          <select className={styles.selectCity} onChange={handleOnChange}>
            <option value='{"lat": 51.507351, "lon":-0.127758}'>Лондоне</option>
            <option value='{"lat": 55.755825, "lon":37.617298}'>Москве</option>
            <option value='{"lat": 40.712776, "lon":-74.005974}'>Нью-Йорке</option>
            <option value='{"lat": 48.856613, "lon": 2.352222}'>Париже</option>
            <option value='{"lat": 59.934280, "lon":30.335098}'>Санкт-Петербурге</option>
          </select>
        </h2>

         <div className={styles.chartContainer}>
           <Chart type='bar' options={options} data={data} />
         </div>

      </div>
    </div>
  )
}

export default Forecast
