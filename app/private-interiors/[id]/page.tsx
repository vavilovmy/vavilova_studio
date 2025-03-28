import React from 'react'
import { privateArchitecture } from '@/data'
import { notFound } from 'next/navigation'
import styles from "../../../styles/WorkGalleryItem.module.css"
import WorkGalleryItem from '@/components/WorkGalleryItem'

export async function generateStaticParams() {
  return privateArchitecture.map((item) => ({id: String(item.id)}))
}

const page = ({params}: {params: {id: string}}) => {
  const post = privateArchitecture.find((p) => p.id === Number(params.id))
    const title = privateArchitecture[Number(params.id) - 1].title
    const content = privateArchitecture[Number(params.id) - 1].content
    const images = privateArchitecture[Number(params.id) - 1].images
    const location = privateArchitecture[Number(params.id) - 1].location
    const date = privateArchitecture[Number(params.id) - 1].date
  
  if (!post) {
    return notFound();
  }

  return (
    <main>
      <section className={styles.workItemBox}>
         <WorkGalleryItem title={title} content={content} images={images} location={location} date={date}/>
      </section>
    </main>
  )
}

export default page