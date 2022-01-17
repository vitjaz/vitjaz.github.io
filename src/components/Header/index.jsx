import styles from "./Header.module.scss"


function Header() {

  const redirectOnGitHub = () => {
    window.open("https://github.com/vitjaz?tab=repositories");
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.mainText}>
        Made with 💖 in Saint-Petersburg &copy; 2021
      </div>
      <div onClick={redirectOnGitHub} className={styles.asideText}>
        My GitHub
      </div>
    </div>
  )
}

export default Header
