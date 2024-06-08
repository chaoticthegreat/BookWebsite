
'use client';
import Image from "next/image";
import styles from '@/app/Styles/home.module.css';
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const handler = (e:any) => {
    console.log("bog");
    e.preventDefault();
    console.log(e);
    var query = "https://openlibrary.org/search.json?q=" + input.replace(/ /g, "+");
    console.log(query);
  }
  return (
<div className={styles.wrapper}>
  <div>
    <ul className={styles.ul}>
      <li className={styles.li} ><form onSubmit={(e)=>handler(e)}><input onChange={(e)=>setInput(e.target.value)}></input></form></li>
      <li className={styles.li}>Home</li>
      <li className={styles.li}>Recommednations</li>
    </ul>
  </div>
  <h1 className={styles.heading}>Books. <br></br> Made. <br></br> Simple.</h1>
</div>
  );
}
