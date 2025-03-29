import WorkGalleryNew from "@/components/WorkGallery";
import styles from "../../styles/Main.module.css"

export default function Home() {
  
  const title = "Частная архитектура"
  const route = "private-architecture"

  return (
    <main className={styles.main}> 
      <WorkGalleryNew title={title} route={route}/>
    </main>
  );
}