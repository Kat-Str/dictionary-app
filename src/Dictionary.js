import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let photosApiKey = `ad431t70o109db66ce3a60fda8f6eceb`;
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;
    axios.get(photosApiUrl).then(handlePhotosResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  if (loaded) {
    return (
      <div style={{ textAlign: "center" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            type="search"
            placeholder="What word do you want to look up?
"
            style={{
              border: "none",
              margin: "5px",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "1.3rem",
              width: "40%",
            }}
            onChange={handleKeywordChange}
          ></input>
          <input
            id="magnifying-glass"
            type="submit"
            value="&#x1F50D;"
            style={{
              border: "none",
              fontSize: "2rem",
              borderRadius: "50%",
              backgroundColor: "transparent",
              filter: "saturate(300%)",
            }}
          ></input>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
