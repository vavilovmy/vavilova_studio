import React from 'react'
import styles from "../styles/Header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.container__headings}>
      <header className={styles.header}>
      <Link href="/">
      <div>
         <h1>DREAMS</h1>
         <p>студия дизайна и архитектуры</p>
      </div>
      </Link>
         <nav>
            <ul>
            <li><Link href="/#main">главная</Link></li>
            <li><Link href="/#about">о нас</Link></li>
            <li><Link href="/#interiors">интерьеры</Link></li>
            <li><Link href="/#architecture">архитектура</Link></li>
            </ul>
         </nav>
         <div className='logo'>
            <img/>
         </div>
      <div className={styles.header__socials}>
         <h2 className='tel'>8 (963) 463-30-30</h2>
         <div className='socials'>
            <Link href="#">
         <img width="25px" height="25px" src="/icons/telegram.svg" alt="" />
            </Link>
            <Link href="#">   
         <img width="25px" height="25px" src="/icons/insta.svg" alt="" />
            </Link>
            <Link href="https://www.houzz.ru/professionaly/arhitektory/studiya-dizayna-i-arhitektury-olygi-vavilovoy-pfvwru-pf~1327143032?" target='_blank'>    
         <img width="25px" height="25px" src="/icons/houzz.svg" alt="" />
            </Link>
         </div>
      </div>
      </header>
    </div>
  )
}

export default Header
