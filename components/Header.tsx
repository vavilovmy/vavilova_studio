"use client"

import React from 'react'
import styles from "../styles/Header.module.css"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Header = () => {

   const [activeBurger, setActiveBurger] = useState(false);
   const handleBurgerClick = () => 
   {
      setActiveBurger(!activeBurger);
   }

   const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container__headings}>
      <header id="main" className={styles.header}>
         <div 
         className={styles.header__burger}
         style={
            {opacity: isVisible ? 1 : 0 }
         }
         onClick={handleBurgerClick}
         >
            {/* <Image src="/icons/burger-menu.svg" width={65} height={65} alt='burger-menu'/>
            <div className={styles.header__burger__background}></div> */}
            <div className={styles.header__burger__bar}></div>
            <div className={styles.header__burger__bar}></div>
            <div className={styles.header__burger__bar}></div>
         </div>
      <Link href="/">
      <div>
         <h1>ОЛЬГА ВАВИЛОВА</h1>
         <p>архитектор</p>
      </div>
      </Link>
         <nav className={styles["header__nav--desktop"]}>
         <ul>
            <li><Link href="/#main">главная</Link></li>
            <li><Link href="/#about">обо мне</Link></li>
            <li><Link href="/#interiors">интерьеры</Link></li>
            <li><Link href="/#architecture">архитектура</Link></li>
            </ul>
         </nav>
         <nav className={styles["header__nav--mobile"]} style={{transform: `translateX(${activeBurger ? 0 : `-110%`})`}}>
            <ul>
            <li><Link href="/#main" onClick={handleBurgerClick}>главная</Link></li>
            <li><Link href="/#about" onClick={handleBurgerClick}>обо мне</Link></li>
            <li><Link href="/#interiors" onClick={handleBurgerClick}>интерьеры</Link></li>
            <li><Link href="/#architecture" onClick={handleBurgerClick}>архитектура</Link></li>
            </ul>
         </nav>
      <div className={styles.header__socials}
       style={{transform: `translateX(${activeBurger ? 0 : `-110%`})`}}>
         <h2 className='tel'>8 (963) 463-30-30</h2>
         <div className={styles.header__socials__images}>
            <Link href="#">
              <Image width={25} height={25} src="/icons/telegram.svg" alt="" />
            </Link>
            <Link href="https://www.instagram.com/vavilovastudio?igsh=MWVjdHB4aWVyb2o0OA%3D%3D&utm_source=qr ">   
                <Image width={25} height={25} src="/icons/insta.svg" alt="" />
            </Link>
            <Link href="https://www.houzz.ru/professionaly/arhitektory/studiya-dizayna-i-arhitektury-olygi-vavilovoy-pfvwru-pf~1327143032?" target='_blank'>    
              <Image width={25} height={25} src="/icons/houzz.svg" alt="" />
            </Link>
         </div>
      </div>
      </header>
    </div>
  )
}

export default Header
