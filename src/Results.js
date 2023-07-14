import React, { useState, useEffect } from "react";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";
import Searching from "./media/searching-book.gif";

export default function Results(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.results) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [props.results]);

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.setProperty("--random-color", randomColor);
  }
  if (isLoading) {
    return <img src={Searching} alt="Searching" />;
  }
  if (props.results) {
    return (
      <div style={{ textAlign: "left" }}>
        <section onMouseEnter={generateRandomColor}>
          <h2>{props.results.word}</h2>
          <Phonetic phonetic={props.results.phonetics} />
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} onMouseEnter={generateRandomColor}>
              <h3>{meaning.partOfSpeech}</h3>
              {meaning.definitions.map(function (definition, index) {
                if (index < 2) {
                  return (
                    <div key={index}>
                      <div className="definition">{definition.definition}</div>
                      <div style={{ opacity: "0.5" }} className="example">
                        {definition.example}
                      </div>
                      <Synonyms synonyms={definition.synonyms} />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
