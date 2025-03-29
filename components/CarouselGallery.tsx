"use client"

import React from 'react'
import styles from "../styles/CarouselGallery.module.css"
import { useState, useEffect } from 'react'

const CarouselGallery = () => {
   const images = [
      "/images/carousel1.jpg",
      "/images/carousel2.jpg",
      "/images/carousel3.JPG",
      "/images/carousel4.jpg",
      "/images/carousel5.jpg",
      "/images/carousel6.jpg"
   ]

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
   <section>
    <div className={styles["carousel-gallery"]}>
      {images.map((image, index) => ( 
         <img 
            className={styles["carousel-gallery__img"]}
            key={index}
            src={image}
            alt={image}
            style={{
               opacity: index === currentIndex ? 1 : 0,
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
    </section>
  )
}

export default CarouselGallery
