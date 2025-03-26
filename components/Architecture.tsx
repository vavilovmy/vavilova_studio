import React from 'react'
import styles from "../styles/Architecure.module.css"
import Link from 'next/link'


const Architecure = () => {
  return (
    <section id="architecture" className={styles.architecture}>
      <div className={styles["architecture__private"]}>
         <img
            alt='privArch'
            src="/images/private-architecture.jpg"
         />
      <div className={styles['architecture__private__text']}>
         <h2>Архитектура</h2>
         <p>Частная</p>
         <p><Link href="/private-architecture">подробнее</Link></p>
      </div>
      </div>
      <div className={styles["architecture__public"]}>
         <img
            alt='pubArch'
            src="/images/public-architecture.jpg"
         />
         <div className={styles['architecture__public__text']}>
         <h2>Архитектура</h2>
         <p>Общественная</p>
         <p><Link href="/public-architecture">подробнее</Link></p>
      </div>
      </div>
    </section>
  )
}

export default Architecure