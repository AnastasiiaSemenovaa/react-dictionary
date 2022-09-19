import React, { useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  function Search(event) {
    event.preventDefault();
    alert(`Searching ${word}`);
  }
  function findWord(event) {
    setWord(event.target.value);
  }

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
