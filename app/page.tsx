import CarouselGallery from "@/components/CarouselGallery";
import styles from "../styles/Main.module.css"
import Hero from "@/components/Hero";
import Interiors from "@/components/Interiors";
import Architecure from "@/components/Architecture";

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
