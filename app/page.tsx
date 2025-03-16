import CarouselGallery from "@/Components/CarouselGallery";
import styles from "../styles/Main.module.css"
import Hero from "@/Components/Hero";
import Interiors from "@/Components/Interiors";
import Architecure from "@/Components/Architecture";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselGallery />
      <div className="container">
      <Hero />
      <Interiors />
      <Architecure />
      </div>
    </main>
  );
}
