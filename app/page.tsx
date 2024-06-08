import Image from "next/image";
import styles from '@/app/Styles/home.module.css';

export default function Home() {
  return (
<div className={styles.wrapper}>
  <div>
    <ul className={styles.ul}>
      <li className={styles.li}>Home</li>
      <li className={styles.li}>Recommednations</li>
    </ul>
  </div>
  <h1 className={styles.heading}>Books. <br></br> Made. <br></br> Simple.</h1>
</div>
  );
}
