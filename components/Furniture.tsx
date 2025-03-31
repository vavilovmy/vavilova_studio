import React from 'react'
import styles from "../styles/Furniture.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Furniture = () => {
  return (
    <section id="furniture" className={styles.architecture}>
      <div className={styles["architecture__private"]}>
         <Image
            width={1000}
            height={1000}
            alt='privArch'
            src="/images/furniture.jpg"
         />
      <div className={styles['architecture__private__text']}>
         <h2>Мебель</h2>
         <p><Link href="/furniture">подробнее</Link></p>
      </div>
      </div>
    </section>
  )
}

export default Furniture
