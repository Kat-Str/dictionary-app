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
        <h1>Dictionary</h1>
        <h4 style={{ fontWeight: "normal" }}>
          What word do you want to look up?
        </h4>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            type="search"
            placeholder="Search"
            onChange={handleKeywordChange}
          ></input>
          <input
            type="submit"
            value="&#x1F50D;"
            style={{ border: "none", fontSize: "1.5rem" }}
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
