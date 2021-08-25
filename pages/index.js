import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.pageStructure}>
      <div className={styles.banner}>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <h2>About me</h2>
            <p>Hi, I'm Jacky. A student studying Computer Science, and Information Technology Management.</p>
          </div>
        </div>
      </div>
      <p>Hello World</p>
    </div>

  )
}

