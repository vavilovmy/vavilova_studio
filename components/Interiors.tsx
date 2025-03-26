import React from 'react'
import styles from "../styles/Interiors.module.css"
import Link from 'next/link'

const Interiors = () => {
  return (
    <section id="interiors" className={styles.interiors}>
      <div className={styles["interiors__private"]}>
         <img 
            src="/images/private-interiors.jpg"
         />
      <div className={styles['interiors__private__text']}>
         <h2>Интерьеры</h2>
         <p>Частные</p>
         <p><Link href="/private-interiors">подробнее</Link></p>
      </div>
      </div>
      <div className={styles["interiors__public"]}>
         <img 
            src="/images/public-interiors.jpg"
         />
         <div className={styles['interiors__public__text']}>
         <h2>Интерьеры</h2>
         <p>Общественные</p>
         <p><Link href="/public-interiors">подробнее</Link></p>
      </div>
      </div>
    </section>
  )
}

export default Interiors
