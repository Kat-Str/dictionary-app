import React from "react";
import LogoDictionary from "./media/book.gif";

export default function Logo() {
  return (
    <div id="logo-div">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "40px",
          marginBottom: "20px",
        }}
      >
        <img src={LogoDictionary} alt="Logo" className="logo" />

        <h1 style={{ fontSize: "90px", margin: "0" }}>Dictionary</h1>
      </div>
    </div>
  );
}
