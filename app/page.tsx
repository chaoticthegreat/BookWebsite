
'use client';
import Image from "next/image";
import styles from '@/app/Styles/home.module.css';
import { hoverGradient } from '@/app/Utils/anims';
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const handler = (e:any) => {
    console.log("bog");
    e.preventDefault();
    console.log(e);
    var query = "https://openlibrary.org/search.json?q=" + input.replace(/ /g, "+");
    fetch(query)
  }
  useEffect(()=> {
    hoverGradient();
  }
  );
  return (
<div className={styles.wrapper}>
  <h1 className={styles.heading} id="head">Books. <br></br> Made. <br></br> Simple.</h1>
  <img className={styles.reader} src='/reader.png'></img>
</div>
  );
}
