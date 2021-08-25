import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.pageStructure}>
      <div className={styles.banner}>
        <div className={styles.about}>
          <h2> About me</h2>
        </div>
      </div>
      <p>Hello World</p>
    </div>

  )
}

