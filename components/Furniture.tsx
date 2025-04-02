import React from 'react'
import styles from "../styles/Furniture.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Furniture = () => {
  return (
    <section id="furniture" className={styles.furniture}>
      <div className={styles["furniture__private"]}>
         <Image
            width={2000}
            height={1500}
            alt='privArch'
            src="/images/furniture.png"
         />
      <div className={styles['furniture__private__text']}>
         <h2>Мебель</h2>
         <p><Link href="/furniture">подробнее</Link></p>
      </div>
      </div>
    </section>
  )
}

export default Furniture
