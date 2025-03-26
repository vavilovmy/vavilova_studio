import React from 'react'
import { privateArchitecture } from '@/data'
import { notFound } from 'next/navigation'
import styles from "../../../styles/WorkGalleryItem.module.css"
import WorkGalleryItem from '@/components/WorkGalleryItem'

// Используем getStaticPaths для динамической генерации путей
export async function getStaticPaths() {
  const paths = privateArchitecture.map((item) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: false, // можно использовать true или 'blocking', если необходимо для других вариантов
  };
}

// Используем getStaticProps для получения данных по id
export async function getStaticProps({ params }: { params: { id: string } }) {
  const post = privateArchitecture.find((p) => p.id === Number(params.id));

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post, // передаем весь пост, а не отдельные поля
    },
  };
}

const Page = ({ post }: { post: typeof privateArchitecture[0] }) => {
  if (!post) {
    return notFound(); // если пост не найден, показываем 404
  }

  const { title, content, images, location, date } = post;

  return (
    <main>
      <section className={styles.workItemBox}>
         <WorkGalleryItem title={title} content={content} images={images} location={location} date={date} />
      </section>
    </main>
  );
}

export default Page;