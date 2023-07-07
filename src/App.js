import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div>
      <Dictionary defaultKeyword="sunset" />
      <footer
        style={{ textAlign: "center", marginTop: "40px", display: "block" }}
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
