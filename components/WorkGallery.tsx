import React from 'react'
import { privateArchitecture } from '@/data'
import styles from "../styles/WorkGallery.module.css"
import Link from 'next/link'

// 408 x 306

export default async function WorkGalleryNew(
   { title, route }: 
   { title: string; route: string }
) {
   const res = await fetch(
      `${process.env.WP_API_URL}/${route}?&acf_format=standard&_fields=id,title,acf,slug`
   );
   const data = await res.json();
   console.log(data)
   
   const items = privateArchitecture;

   type ResponseData = {
      id: number;
      slug: string;
      title: { rendered: string };
      acf: {
         content: string;
         year: string;
         location: string;
         previewImg: string;
         img1: string;
         img2: string;
         img3: string;
         img4: string;
         img5: string;
         img6: string;
         img7: string;
         img8: string;
         img9: string;
         img10: string;
      }
   }

  return (
   <section className={styles.workGallery}>
      <h1>
         {title}
      </h1>
      
    <div className={styles.galleryWrapper}>
      {data.map((item: ResponseData) => (
         <div key={item.id} 
         className={`${styles["workGallery__item"]}`}>
            <img 
               src={item.acf.previewImg}
               alt={item.title.rendered}
            />
            <div className={styles.workGallery__item__textbox}>
               <h2>{item.title.rendered}</h2>
               {/* ЗДЕСЬ ДОБАВИТЬ ВМЕСТО TEST ${route} ДЛЯ МАРШРУТИЗАЦИИ */}
               <p><Link href={`/${route}/${item.slug}`}>подробнее</Link></p> 
            </div>
         </div>
        
      ))}
    </div>
   </section>
  )
}