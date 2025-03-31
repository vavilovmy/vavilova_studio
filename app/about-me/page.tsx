import styles from "../../styles/Main.module.css"
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
      <Hero />
      </div>
    </main>
  );
}