"use client"

import React from 'react'
import styles from '../styles/Services.module.css'
import { services } from '@/data'
import ServiceItem from './ServiceItem'

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services__list}>
      <h2>Услуги:</h2>
      {services.map(service => (
         <ServiceItem key={service.id} title={service.title} content={service.content}/>
      ))}
      </div>
    </section>
  )
}

export default Services
