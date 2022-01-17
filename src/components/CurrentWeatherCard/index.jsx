import styles from "./CurrentWeatherCard.module.scss"

function CurrentWeatherCard({currentWeather}) {

  // вычисление направления ветра по метеорологическим градусам
  function getCardinalDirection(angle) {
      const directions = ['↑ Север', '↗ Северо-Восток', '→ Восток', '↘ Юго-Восток', '↓ Юг', '↙ Юго-Запад', '← Запад', '↖ Северо-Запад'];
      return directions[Math.round(angle / 45) % 8];
  }

  function getTimeFromUnixTimestamp(unix){
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    return `${hours}:${minutes.substring(minutes.length-2)}:${seconds.substring(seconds.length-2)}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {/* Левая сторона */}
        {currentWeather.weather && <img src={`img/openWeather/${currentWeather.weather[0].icon}@2x.png`} alt="Icon" />}
        {/* === Влажность === */}
        <div className={styles.humidityContainer}>
        <div className="humidity">Влажность:</div>
         <p>{currentWeather.main.humidity && `${(currentWeather.main.humidity).toFixed(1)}%`}</p>
        </div>
        <div className={styles.progressHumidity}><div style={{width: `${currentWeather.main.humidity}%`}}></div></div>
      
        {/* === Облачность ===*/}
        <div className={styles.cloudsContainer}>
        <div className="clouds">Облачность:</div>
         <p>{currentWeather.clouds.all && `${currentWeather.clouds.all}%`}</p>
        </div>
        <div className={styles.progressClouds}><div style={{width: `${currentWeather.clouds.all}%`}}></div></div>

        {/* === Видимость ===*/}
        <div className={styles.visibilityContainer}>
        <div className="visibility">Видимость</div>
         <p>{`${Math.floor(currentWeather.visibility / 1000)} км`}</p>
        </div>

        {/* Ветер */}
        <div className={styles.windContainer}>
            <p>Ветер</p>
            <p>{currentWeather.wind.speed && `${(currentWeather.wind.speed).toFixed(1)} м/с`}</p>
        </div>
        <div className={styles.directionContainer}>
          <p>Направление ветра</p>
          <p>{currentWeather.wind.deg && `${(getCardinalDirection(currentWeather.wind.deg))}`}</p>
        </div>

      </div>

      {/* Правая сторона */}
      <div className={styles.rightSide}>
        <div className={styles.currentTemp}>{`${(currentWeather.main.temp).toFixed(1)}\u00B0C`}</div>
        <div className={styles.appTemp}>{`Ощущается как ${(currentWeather.main.feels_like).toFixed(1)}\u00B0C`}</div>
        <div className={styles.sunriseContainer}>
          <p>Рассвет</p>
          <p>{`${getTimeFromUnixTimestamp(currentWeather.sys.sunrise)}`}</p>
        </div>
         <div className={styles.sunsetContainer}>
          <p>Закат</p>
          <p>{`${getTimeFromUnixTimestamp(currentWeather.sys.sunset)}`}</p>
        </div>
        <div className={styles.pressureContainer}>
          <p>Давление</p>
          <p>{`${(currentWeather.main.pressure * 0.75).toFixed(1)} мм.рт.ст`}</p> 
        </div>
        </div>

    </div>
  )
}

export default CurrentWeatherCard
