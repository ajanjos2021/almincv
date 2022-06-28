import CVDesktop from "../components/CV/DesktopVersion";
import CVMobile from "../components/CV/MobileVersion";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.desktop}>
        <CVDesktop />
      </div>
      <div className={styles.mobile}>
        <CVMobile />
      </div>
    </>
  )
}
