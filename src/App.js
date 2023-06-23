import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div>
      <Dictionary />
      <footer
        style={{ textAlign: "center", marginTop: "40px", display: "block" }}
      >
        This project was coded by{" "}
        <a
          style={{ textDecoration: "none", color: "#0969da" }}
          href="https://github.com/Kat-Str/dictionary-app"
          target="_blank"
        >
          {" "}
          Katarzyna Strzałek{" "}
        </a>
        and is{" "}
        <a
          style={{ textDecoration: "none", color: "#0969da" }}
          href="https://github.com/Kat-Str/dictionary-app"
          target="_blank"
        >
          {" "}
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}
