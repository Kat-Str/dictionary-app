import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    if (keyword.trim() !== "") {
      // documentation: https://dictionaryapi.dev/
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dictionary</h1>
      <h4 style={{ fontWeight: "normal" }}>
        What word do you want to look up?
      </h4>
      <form
        onSubmit={search}
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
    </div>
  );
}
