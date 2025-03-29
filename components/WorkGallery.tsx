import React from 'react'
import styles from "../styles/WorkGallery.module.css"
import Link from 'next/link'
import Image from 'next/image';

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
         img2: string | boolean;
         img3: string | boolean;
         img4: string | boolean;
         img5: string | boolean;
         img6: string | boolean
         img7: string | boolean;
         img8: string | boolean;
         img9: string | boolean;
         img10: string | boolean;
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
            <Image 
               src={item.acf.previewImg}
               alt={item.title.rendered}
               width={1000}
               height={1000}
            />
            <div className={styles.workGallery__item__textbox}>
               <h2>{item.title.rendered}</h2>
               <p><Link href={`/${route}/${item.slug}`}>подробнее</Link></p> 
            </div>
         </div>
        
      ))}
    </div>
   </section>
  )
}