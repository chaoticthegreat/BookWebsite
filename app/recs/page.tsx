'use client';
import styles from '@/app/Styles/recs.module.css';
import Book from '@/components/book';
import { tapInput } from '@/app/Utils/anims';
import { useEffect, useState } from "react";
import { getHighestFrequencyGenere } from '../wishlist/store';


export default function Home() {
    const [input, setInput] = useState("");
    const [names, setNames] = useState([]);
    const [genres, setGenres] = useState([]);

    const handler = (e:any) => {
        e.preventDefault();
        var query = "https://openlibrary.org/search.json?q=" + input.replace(/ /g, "+");
        console.log(query)
        getNames(query)
    }
    useEffect(()=> {
      tapInput();
    }
  );
    function getNames(query: string) {
      fetch(query, {
        method: 'GET'
      }).then(response=>{
        if(!response.ok) {
          throw new Error("Network response is not ok" + response.statusText)
        }
        return response.json()
      })
      .then(data=> {
        if(!data.docs[0]["title"]) {
          return null;
        }
        for (let i=0; i<3; i++) {
          console.log(data.docs[0]["title"])
        }
        setNames([[data.docs[0].title, data.docs[0].cover_edition_key, data.docs[0].author_name, data.docs[0].subject_key[0]],[data.docs[1].title, data.docs[1].cover_edition_key, data.docs[1].author_name, data.docs[1].subject_key[0]],[data.docs[2].title, data.docs[2].cover_edition_key, data.docs[2].author_name, data.docs[2].subject_key[0]], ])
        console.log([[data.docs[0].title, data.docs[0].cover_edition_key],[data.docs[1].title, data.docs[0].cover_edition_key],[data.docs[2].title, data.docs[0].cover_edition_key], ])
      })
    }
    function getGenre(genre:any){
      var query = `https://openlibrary.org/subjects/${genre}.json?details=true`
      fetch(query, {
        method: 'GET'
      }).then(response=>{
        if(!response.ok) {
          throw new Error("Network response is not ok" + response.statusText)
        }
        return response.json()
      })
      .then(data=> {

        setGenres([data.works[0].title]);
        console.log([data.works[0].title])
      })
    }
    useEffect(()=>{
      getGenre(getHighestFrequencyGenere());
    })
    return (
  <div className={styles.wrapper}>
    <div id="search">
      <form onSubmit={(e)=>handler(e)}>
        <input className={styles.input} placeholder={"search genres"} id="input" onChange={(e)=>(setInput(e.target.value))}/>
      </form>
    </div>
    <div id="results" className={styles.results}>
      <h2>Search results</h2>
      {names ? names.map((input)=> (<Book args={[`https://covers.openlibrary.org/b/olid/${input[1]}-S.jpg`,input[0],input[2], input[3]]}/>)) : <p>No results</p>}
    </div>
    <div id="recs" className={styles.recs}>
      <h2>We think you'll like</h2>
      <p>{genres}</p>
    </div>
  </div>
    );
  }
  