import React from 'react'
import styles from "../styles/Hero.module.css"
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.hero__wrapper}>
      <h1>Студия дизайна и архитектуры Dreams</h1>
      <div className={styles["hero__first-part"]}>
      <div className={styles["hero__first-part__text-container"]}>
        <h2>Ольга Вавилова</h2>
        <p>Руководитель студии авторской мебели и дизайна Dreams</p>
        <p>Закончила Челябинский Государственный Технический Университет в 1996 году, архитектор, дизайнер</p>
        <p>С 1998 года занимаюсь частной практикой в области архитектуры и дизайна интерьера. В 2003 году создала творческую мастерскую, в 2013 году открыла салон авторской детской мебели по адресу ул. Труда 185а-203, ЦИ Магнит</p>
        <p>Направления работы:</p>
        <ul>
          <li>дизайн интерьера в любой стилистике</li>
          <li>эскизные проекты жилых и общественных зданий</li>
          <li>авторский надзор за ходом выполнения проектов</li>
          <li>изготовление авторской мебели</li>
        </ul>
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
      <div className={styles["hero__second-part"]}>
       <p>За годы существования студией разработаны и реализованы интерьеры развлекательных центров «Уральские пельмени», «Клубок», автосалонов «Тойота-центр», «Мицубиши-центр», «Lexus», «Honda», ресторанов «SaoTao», «Panini», «Jacksons», кафе «Автоланч» пос.Тимирязевский, офисных центров компании «Смарт», «Рэкком-палас», «Радиотелеком», офиса «Рифт» в Мизаре, «Металлснаб» в Т11, гостиницы «Алмаз», VIP-сауны «Колизей», административного корпуса завода «Энергомаш», магазинов «Пятёрочка» по ул. Бр. Кашириных, «АРТ-оптика» по ул. Труда, обувного бутика «VALLEY» в Горках, частных жилых домов и квартир и других объектов различного назначения в г. Челябинске и области.</p>
      </div>
      </div>
    </section>
  )
}

export default Hero
