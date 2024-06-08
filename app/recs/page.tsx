'use client';
import {useState } from "react";
import styles from '@/app/Styles/recs.module.css';

export default function Home() {
    const [input, setInput] = useState("");
    const handler = (e:any) => {
        console.log("bog");
        e.preventDefault();
        console.log(e);
        var input = e.target.value; 
        var query = "https://openlibrary.org/search.json?q=" + input.replace(/ /g, "+");
    }
    return (
  <div className={styles.wrapper}>
    <form onSubmit={(e)=>handler(e)}>
      <input className={styles.input} placeholder={"search genres"}/>
    </form>
  </div>
    );
  }
  