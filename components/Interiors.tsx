import React from 'react'
import styles from "../styles/Interiors.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Interiors = () => {
  return (
    <section id="interiors" className={styles.interiors}>
      <div className={styles["interiors__private"]}>
         <Image
            width={1000}
            height={1000} 
            alt="privInt"
            src="/images/private-interiors.jpg"
         />
      <div className={styles['interiors__private__text']}>
         <h2>Интерьеры</h2>
         <p>Частные</p>
         <p><Link href="/private-interiors">подробнее</Link></p>
      </div>
      </div>
      <div className={styles["interiors__public"]}>
         <Image
            width={1000}
            height={1000}
            alt="pubInt" 
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
