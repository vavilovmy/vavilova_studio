import React from 'react'
import styles from "../styles/Footer.module.css"
import Link from 'next/link'


const Footer = () => {
  return (
   <div className={styles.container__headings}>
   <footer className={styles.footer}>
      <div>
         <h1>DREAMS</h1>
         <p>студия дизайна и архитектуры</p>
      </div>
      <nav>
         <ul>
            <li><Link href="#main">главная</Link></li>
            <li><Link href="#about">о нас</Link></li>
            <li><Link href="#">интерьеры</Link></li>
            <li><Link href="#">архитектура</Link></li>
         </ul>
      </nav>
      <div className='logo'>
         <img/>
      </div>
   <div className={styles.footer__socials}>
      <h2 className='tel'>8 (963) 463-30-30</h2>
      <div className='socials'>
      <img width="25px" height="25px" src="/icons/telegram.svg" alt="" />
      <img width="25px" height="25px" src="/icons/insta.svg" alt="" />
      <img width="25px" height="25px" src="/icons/houzz.svg" alt="" />
      </div>
   </div>
   </footer>
 </div>
  )
}

export default Footer
