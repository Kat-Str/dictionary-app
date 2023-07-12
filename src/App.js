import Dictionary from "./Dictionary";
import "./App.css";
import Logo from "./Logo";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const interval = setInterval(generateRandomColor, 1000);
    return () => clearInterval(interval);
  }, []);

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.setProperty("--random-color", randomColor);
  }
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
