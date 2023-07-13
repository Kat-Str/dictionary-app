import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

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
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
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
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
