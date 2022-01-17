import { useState } from "react"
import styles from "./CardCity.module.scss"


function CardCity({title,titleEn, imageUrl, activeC, isActive, changeActiveCityMain, changeActiveCity}) {

  const [active, setActive] = useState(isActive);

  const toggleActive = (titleEn) => {
    if(active){
      setActive(!active);
    }else{
       setActive(!active);
       changeActiveCity(titleEn);
       changeActiveCityMain(titleEn);
    }
  }

  return (
    <div className={styles.card} onClick={()=>{toggleActive(titleEn)}}>
      <div className={styles.cardHeader}>
          <img className={styles.headerImg} src={imageUrl} alt="icon" />
        <div className={styles.time}>
          {activeC === titleEn ? <p style={{color: "#6a58f3"}}>&#x2705;</p> : <p>&#x274C;</p>}
        </div>
      </div>
      {activeC === titleEn ? <p style={{color: "#6a58f3"}} className={styles.cityName}>{title}</p> : <p className={styles.cityName}>{title}</p>}
    </div>
  )
}

export default CardCity
