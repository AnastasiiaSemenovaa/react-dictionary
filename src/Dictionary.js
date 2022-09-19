import React, { useState } from "react";
import axios from "axios";
export default function Dictionary() {
  const [word, setWord] = useState(null);
  function Search(event) {
    event.preventDefault();
    alert(`Searching ${word}`);
  }
  function findWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}
`;
  axios.get(url).then(handleResponse);

  return (
    <div className="Dictionary">
      <h1>What word are you looking for?</h1>
      <form onSubmit={Search}>
        <input
          type="Search"
          autofocus="on"
          placeholder="Type it here please"
          onChange={findWord}
        ></input>
        <input type="Submit" value="Search"></input>
      </form>
    </div>
  );
}
