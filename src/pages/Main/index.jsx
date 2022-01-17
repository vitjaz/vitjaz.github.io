import CardCity from "../../components/CardCity"
import Header from "../../components/Header"
import {useEffect, useState} from "react"
import CurrentWeatherCard from "../../components/CurrentWeatherCard"


import styles from "./Main.module.scss"

function Main({activeCity, cityCardArr, currentWeather, changeActiveCity}) {


  const [activeC, setActiveC] = useState(activeCity);
  const changeActiveCityMain = (title) => {
    setActiveC(title);
  };

  return (
    <div className={styles.container}>
       <Header />
       <div className={styles.pageContainer}>
            <h2 className={styles.pageName}>Главная панель</h2>
          {/* ===== КАРТОЧКИ ====== */}
          <div className={styles.cityCardBlock}>
             {
                  cityCardArr?.map(
                 (item, idx) => {
                   return <CardCity 
                    key={idx} 
                    title={item.title} 
                    titleEn={item.titleEn} 
                    imageUrl={item.image_url} 
                    activeC={activeC} 
                    isActive={item.title === activeC ? true : false} 
                    changeActiveCityMain={changeActiveCityMain} 
                    changeActiveCity={changeActiveCity}/>
                 })
             }
          </div>

          {/* ===== ПОДРОБНЫЕ ДАННЫЕ О ПОГОДЕ В ВЫБРАННОМ ГОРОДЕ ===== */}
          <h2>Погода</h2>

          <div className={styles.weatherContainer}>
            <div className={styles.leftBlock}>
              <h3 className={styles.headerLeftBlock}>
                {`Последние наблюдения 1 час назад`}
              </h3>

              <CurrentWeatherCard currentWeather={currentWeather} />
              
            </div>
          </div>
       </div>

    </div>
  )
}

export default Main
