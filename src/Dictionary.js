import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  function Search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);

    let photoKey = `563492ad6f91700001000001b57b8899f0a84e85b13ebfa1a1f7c743`;
    let photoUrl = `https://api.pexels.com/v1/search/?page=2&per_page=3&query=${word}`;
    let headers = { Authorization: `Bearer ${photoKey}` };
    axios.get(photoUrl, { headers: headers }).then(handlePhotoSearch);
  }

  function handlePhotoSearch(response) {
    setPhotos(response.data.photos);
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
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <Results results={results} />
          </div>
          <div class="col-sm-6">
            <Photos photos={photos} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
