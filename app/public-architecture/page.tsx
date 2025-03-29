import WorkGalleryNew from "@/components/WorkGallery";
import styles from "../../styles/Main.module.css"

export default function Home() {
  
  const title = "Общественная архитектура"
  const route = "public-architecture"

  return (
    <main className={styles.main}> 
      <WorkGalleryNew title={title} route={route}/>
    </main>
  );
}