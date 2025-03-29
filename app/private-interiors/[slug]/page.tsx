import React from 'react'
import { notFound } from 'next/navigation'
import styles from "../../../styles/WorkGalleryItem.module.css"
import WorkGalleryItem from '@/components/WorkGalleryItem'

const route = "private-interiors"

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.WP_API_URL}/${route}?&acf_format=standard&_fields=id,title,acf,slug`
  );
  const data = await res.json();

  const postSlugs = data.map((post: {slug: string}) => ({slug: post.slug}));

  return postSlugs;
  
}

export default async function Page({params}: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;

  const res = await fetch(
    `${process.env.WP_API_URL}/${route}?slug=${slug}&acf_format=standard&_fields=id,title,acf,slug`
  );
  const data = await res.json();
  
  const images = Object.keys(data[0].acf)
    .filter((key) => key.startsWith("img") && data[0].acf[key] && data[0].acf[key] !== "")
    .map((key) => data[0].acf[key]);
  
  if (!data) {
    return notFound();
  }

  return (
    <main>
      <section className={styles.workItemBox}>
      <WorkGalleryItem title={data[0].title.rendered} content={data[0].acf.content} images={images} location={data[0].acf.location} date={data[0].acf.year}/>
      </section>
    </main>
  )
}
