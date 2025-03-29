import React from 'react'
import styles from "../styles/Footer.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
   <div className={styles.container__headings}>
   <footer className={styles.footer}>
      
      <nav>
         <ul>
            <li><Link href="/#main">главная</Link></li>
            <li><Link href="/#about">обо мне</Link></li>
            <li><Link href="/#interiors">интерьеры</Link></li>
            <li><Link href="/#architecture">архитектура</Link></li>
         </ul>
      </nav>
   <div className={styles.footer__socials}>
   <Link href="#">
         <Image width={25} height={25} src="/icons/telegram.svg" alt="" />
            </Link>
            <Link href="https://www.instagram.com/vavilovastudio?igsh=MWVjdHB4aWVyb2o0OA%3D%3D&utm_source=qr">   
         <Image width={25} height={25} src="/icons/insta.svg" alt="" />
            </Link>
            <Link href="https://www.houzz.ru/professionaly/arhitektory/studiya-dizayna-i-arhitektury-olygi-vavilovoy-pfvwru-pf~1327143032?" target='_blank'>    
         <Image width={25} height={25} src="/icons/houzz.svg" alt="" />
            </Link>
   </div>
   <div>
   <h2 className='tel'>8 (963) 463-30-30</h2>
   <p>© 2025 OLGA VAVILOVA</p>
   </div>
   </footer>
 </div>
  )
}

export default Footer
