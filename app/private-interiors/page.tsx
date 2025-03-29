import WorkGalleryNew from "@/components/WorkGallery";
import styles from "../../styles/Main.module.css"

export default function Home() {
  
  const title = "Частные интерьеры"
  const route = "private-interiors"

  return (
    <main className={styles.main}> 
      <WorkGalleryNew title={title} route={route}/>
    </main>
  );
}