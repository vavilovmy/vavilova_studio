import WorkGallery from "@/components/WorkGallery";
import styles from "../../styles/Main.module.css"

export default function Home() {
  const title = "Частные интерьеры"
  return (
    <main className={styles.main}>
      <WorkGallery title={title}/>
    </main>
  );
}
