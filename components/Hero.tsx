import React from 'react'
import styles from "../styles/Hero.module.css"
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.hero__wrapper}>
      
      <div className={styles["hero__first-part"]}>
      <div className={styles["hero__first-part__text-container"]}>
        <h2>Я - Ольга Вавилова</h2>
        <p>Руководитель студии авторской мебели и дизайна
        Закончила Челябинский Государственный Технический Университет в 1996 году, архитектор, дизайнер <br></br>
        С 1998 года занимаюсь частной практикой в области архитектуры и дизайна интерьера. В 2003 году создала творческую мастерскую, в 2013 году открыла салон авторской мебели.<br></br>
        За годы существования студией разработаны и реализованы интерьеры развлекательных центров, ресторанов, автосалонов, офисных центров, частных жилых домов и квартир в Челябинске, Екатеринбурге, Златоусте, Москве, Сочи, Каннах и других городах.</p>
      </div>
      <div  className={styles["hero__first-part__image-container"]}>
       <Image
          width={500}
          height={500}
          alt="portrait"
          src='/images/portrait.jpg'
       />
      </div>
      </div >
      
      </div>
    </section>
  )
}

export default Hero
