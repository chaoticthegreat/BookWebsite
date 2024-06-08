'use client';
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
    return (
  <div>
    <form onSubmit={handler(e)}><input></input></form>
  </div>
    );
  }
  