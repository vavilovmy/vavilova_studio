import React from 'react'
import { notFound } from 'next/navigation'
import styles from "../../../styles/WorkGalleryItem.module.css"
import WorkGalleryItem from '@/components/WorkGalleryItem'
import { useRouter } from 'next/router'

const route = "private-architecture"

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.WP_API_URL}/${route}?&acf_format=standard&_fields=id,title,acf,slug`
  );
  const data = await res.json();

  const postSlugs = data.map((post: {slug: string}) => ({slug: post.slug}));

  return postSlugs;
  
}

export default async function Page({params}: {params: { slug: string }}) {

  const res = await fetch(
    `${process.env.WP_API_URL}/${route}?slug=${params.slug}&acf_format=standard&_fields=id,title,acf,slug`
  );
  const data = await res.json();
  
  const images = Object.keys(data.acf)
    .filter((key) => key.startsWith("img") && data.acf[key] && data.acf[key] !== "")
    .map((key) => data.acf[key]);
  
  if (!data) {
    return notFound();
  }

  return (
    <main>
      <section className={styles.workItemBox}>
         <h1>${data[0].title.rendered}</h1>
      </section>
    </main>
  )
}

// <WorkGalleryItem title={data.title.rendered} content={data.acf.content} images={images} location={data.acf.location} date={data.acf.year}/>