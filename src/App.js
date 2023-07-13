import Dictionary from "./Dictionary";
import "./App.css";
import Logo from "./Logo";
import React, { useEffect } from "react";

export default function App() {
  return (
    <div>
      <Logo />
      <Dictionary defaultKeyword="lexicography" />
      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          display: "block",
          color: "#fff",
        }}
      >
        This project was coded by{" "}
        <a
          href="https://github.com/Kat-Str/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Katarzyna Strzałek{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/Kat-Str/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}
