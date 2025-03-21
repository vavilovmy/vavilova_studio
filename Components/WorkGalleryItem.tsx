"use client"

import React from 'react'
import styles from "../styles/WorkGalleryItem.module.css"
import { useState, useEffect } from 'react'

const WorkGalleryItem = ({
    title, content, images 
   }: { 
      title: string; content: string; images: string[];
   }) => {
   // const images = privateArchitecture[0].images;
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [currentIndex]);

    const goToNext = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      
    };
  
    const goToPrev = () => {
      setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

  return (
   <section className={styles.workItem}>
      <h1>{title}</h1>
    <div className={styles["carousel-gallery"]}>
      {images.map((image, index) => ( 
         <img 
            className={styles["carousel-gallery__img"]}
            key={index}
            src={image}
            alt={image}
            style={{
               opacity: index === currentIndex ? 1 : 0
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
