import React from 'react';
import { notFound } from 'next/navigation';
import styles from "../../../styles/WorkGalleryItem.module.css";
import WorkGalleryItem from '@/components/WorkGalleryItem';

export default async function PostPage() {

   const route = "private-architecture" // ПОТОМ ПЕРЕДАТЬ КАК ПРОПС ПРИ ДИНАМИЧЕСКОМ РОУТИНГЕ ИЗ PAGE.TSX В [SLUG]/[ID] ВНУТРЬ ЭТОГО КОМПОНЕНТА

   const res = await fetch(
         `${process.env.WP_API_URL}/${route}?&acf_format=standard&_fields=id,title,acf`
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
    <div>
      
    </div>
  )
}


