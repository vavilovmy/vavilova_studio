import React from 'react'
import { privateArchitecture } from '@/data'
import styles from "../styles/WorkGallery.module.css"
import Link from 'next/link'
import Image from "next/image";

// 408 x 306

const WorkGallery = ({ title }: { title: string }) => {
   const items = privateArchitecture;

  return (
   <section className={styles.workGallery}>
      <h1>
         {title}
      </h1>
      
    <div className={styles.galleryWrapper}>
      {items.map((item) => (
         
         <div key={item.id} className={`${styles["workGallery__item"]} ${item.id === (Math.ceil(items.length / 3) + 1) ? styles["workGallery__item--small"] : ""}`.trim()}>
            <img 
               src={item.previewImg}
               alt={item.title}
            />
            <div className={styles.workGallery__item__textbox}>
               <h2>{item.title}</h2>
               <p><Link href={`/private-architecture/${item.id}`}>подробнее</Link></p>
            </div>
         </div>
        
      ))}
    </div>
   </section>
  )
}

export default WorkGallery
