'use client';
import {useState } from "react";
import styles from '@/app/Styles/recs.module.css';
import Book from '@/components/book';



export default function Home() {
    const [input, setInput] = useState("");
    const [names, setNames] = useState([]);
    const handler = (e:any) => {
        e.preventDefault();
        var query = "https://openlibrary.org/search.json?q=" + input.replace(/ /g, "+");
        console.log(query)
        getNames(query)
    }
    function getNames(query: string): String {
      fetch(query, {
        method: 'GET'
      }).then(response=>{
        if(!response.ok) {
          throw new Error("Network response is not ok" + response.statusText)
        }
        return response.json()
      })
      .then(data=> {
        for (let i=0; i<3; i++) {
          console.log(data.docs[0]["title"])
        }
        setNames([[data.docs[0].title, data.docs[0].cover_edition_key],[data.docs[1].title, data.docs[1].cover_edition_key],[data.docs[2].title, data.docs[2].cover_edition_key], ])
        console.log([[data.docs[0].title, data.docs[0].cover_edition_key],[data.docs[1].title, data.docs[0].cover_edition_key],[data.docs[2].title, data.docs[0].cover_edition_key], ])
      })
    }
    return (
  <div className={styles.wrapper}>
    <div id="search">
      <form onSubmit={(e)=>handler(e)}>
        <input className={styles.input} placeholder={"search genres"} onChange={(e)=>(setInput(e.target.value))}/>
      </form>
    </div>
    <div id="results" className={styles.results}>
      {names.map((input)=> (
          <Book args={[`https://covers.openlibrary.org/b/olid/${input[1]}-S.jpg`,input[0],"crap"]}/>
      ))}
    </div>
    <div id="recs">

    </div>
  </div>
    );
  }
  