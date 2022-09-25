import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);
  function Search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }
  function findWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <h1>What word are you looking for?</h1>
      <section>
        <form onSubmit={Search}>
          <input
            type="Search"
            autoFocus="off"
            placeholder="Type it here please"
            onChange={findWord}
          ></input>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
