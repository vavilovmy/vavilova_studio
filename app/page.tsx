import CarouselGallery from "@/components/CarouselGallery";
import styles from "../styles/Main.module.css"
import Hero from "@/components/Hero";
import Interiors from "@/components/Interiors";
import Architecure from "@/components/Architecture";
import Furniture from "@/components/Furniture";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselGallery />
      <div className="container">
      <Hero />
      <Services />
      <Interiors />
      <Architecure />
      <Furniture />
      </div>
    </main>
  );
}
