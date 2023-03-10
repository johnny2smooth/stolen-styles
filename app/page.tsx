import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hoverOpacity}>
        <div className={styles.blurCircle} data-v-1090a973></div>
        <div className={styles.blurCircle} data-v-1090a973></div>
        <div className={styles.blurCircle} data-v-1090a973></div>
        <div className={styles.blurCircle} data-v-1090a973></div>
      </div>
    </main>
  );
}
