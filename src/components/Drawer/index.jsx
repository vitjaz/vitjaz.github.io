import styles from "./Drawer.module.scss"
import {Link} from "react-router-dom"
import Loader from "react-loader-spinner";

function Drawer({currentWeather, currentDate, currentTime}) {

  return (
    <div className={styles.drawer} >
      <div className={styles.drawerHeader}>
        <Link to={'/'}><i class="fas fa-cloud-sun-rain fa-2x"></i><h2>React Weather</h2></Link>
      </div>
      <div className={styles.drawerBody}>
        <ul>
          <li> <Link to={'/'}><i class="fas fa-stream"></i>Главная панель</Link> </li>
          <li> <Link to={'/forecast'}><i class="fas fa-satellite-dish"></i>Прогноз</Link></li>
          <li> <Link to={'/statistics'}><i class="fas fa-atlas"></i>Статистика региона</Link></li>
          <li> <Link to={'/settings'}><i class="fas fa-cog"></i>Настройки</Link> </li>
        </ul>
      </div>
      {/* Карточка с текущей погодой для выбранного города */}
      <div className={styles.drawerCurrentCard}>
        <div className={styles.wrapper}>
           <div className={styles.cardHeader}>
              {currentWeather.weather && <img src={`img/openWeather/${currentWeather.weather[0].icon}@2x.png`} alt="Icon" />}
              <div className={styles.cardHeaderText}>
                <p>Сегодня</p>
                <p>{currentTime}</p>
                <p>{currentDate}</p>
              </div>
            </div>
        <div className={styles.container}>
          {/* Текущая температура */}
          <p className={styles.currentTemp}>{currentWeather.main.temp && `${(currentWeather.main.temp).toFixed(1)}\u00B0C`}</p>
          {/* Выбранный город */}
          <p className={styles.currentCity}>{currentWeather.name}</p>
          {/* Код страны */}
          <p className={styles.currentState}>{currentWeather.sys.country}</p>

          {/* =========== ВЛАЖНОСТЬ ============ */}
          <div className={styles.currentHumidity}><p>Влажность</p><p>{currentWeather.main.humidity && `${(currentWeather.main.humidity).toFixed(1)}%`}</p></div>
          <div className={styles.progressHumidity}><div style={{width: `${currentWeather.main.humidity}%`}}></div></div>

          {/* ========== ОБЛАЧНОСТЬ ============ */}
          <div className={styles.currentVisibility}>
            <p>Облачность</p>
            <p>{`${currentWeather.clouds.all}%`}</p>
          </div>
          <div className={styles.progressVisibility}><div style={{width: `${currentWeather.clouds.all}%`}}></div></div>

          {/* ========== ВЕТЕР ============ */}
          <div className={styles.currentWind}>
            <p>Ветер</p>
            <i class="fas fa-wind"></i>
            <p>{currentWeather.wind.speed && `${(currentWeather.wind.speed).toFixed(1)} м/с`}</p>
          </div>

           <Loader
              type="ThreeDots"
              color="#6a58f3"
              height={40}
              width={40}
            />
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default Drawer
