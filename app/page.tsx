import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Hello Next js 13.2 🔥 </h1>
    </main>
  );
}
