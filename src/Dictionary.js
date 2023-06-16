import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    if (keyword.trim() !== "") {
      alert(`searching for the definition of ${keyword}`);
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
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
