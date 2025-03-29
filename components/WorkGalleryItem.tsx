"use client"

import React from 'react'
import styles from "../styles/WorkGalleryItem.module.css"
import { useState, useEffect } from 'react'
import Image from 'next/image'

const WorkGalleryItem = ({
    title, content, images, location, date 
   }: { 
      title: string; content: string; images: string[]; location: string; date: string;
   }) => {
   
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [images.length]);

    const goToNext = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      
    };
  
    const goToPrev = () => {
      setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

  return (
   <section className={styles.workItem}>
      <h1>{title}</h1>
      <div className={styles.workGallery__item__location}>
            <Image 
            src="/icons/location-black.svg"
            alt="location marker"
            width={25}
            height={25}
            />
            <p>
               {location}, {date}
            </p>
            </div>
    <div className={styles["carousel-gallery"]}>
      {images.map((image, index) => ( 
         <Image 
            className={styles["carousel-gallery__img"]}
            key={index}
            src={image}
            alt={image}
            width={2000}
            height={1000}
            style={{
               opacity: index === currentIndex ? 1 : 0,
               zIndex: index === currentIndex ? 10 : 0
             }}
         />
      ))}
      <button onClick={goToPrev} className={styles["button--previous"]}>
      &#10094;
      </button>
      <button onClick={goToNext} className={styles["button--next"]}>
      &#10095;
      </button>
    </div>
    <p>{content}</p>
    </section>
  )
}

export default WorkGalleryItem
