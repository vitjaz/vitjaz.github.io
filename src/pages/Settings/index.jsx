import Header from "../../components/Header"
import styles from "./Settings.module.scss"

function Settings() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.pageContainer}>
        <h2 className={styles.pageName}>В разработке</h2>
      </div>
    </div>
  )
}

export default Settings
