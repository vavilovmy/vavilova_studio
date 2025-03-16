import React from 'react'
import styles from "../styles/Architecure.module.css"
import Link from 'next/link'

const Architecure = () => {
  return (
    <section className={styles.architecture}>
      <div className={styles["architecture__private"]}>
         <img 
            src="/images/private-architecture.jpg"
         />
      <div className={styles['architecture__private__text']}>
         <h2>Архитектура</h2>
         <p>Частная</p>
         <p><Link href="#">подробнее</Link></p>
      </div>
      </div>
      <div className={styles["architecture__public"]}>
         <img 
            src="/images/public-architecture.jpg"
         />
         <div className={styles['architecture__public__text']}>
         <h2>Архитектура</h2>
         <p>Общественная</p>
         <p><Link href="#">подробнее</Link></p>
      </div>
      </div>
    </section>
  )
}

export default Architecure