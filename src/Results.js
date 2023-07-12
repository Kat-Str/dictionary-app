import React from "react";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div style={{ textAlign: "left" }}>
        <section>
          <h2>{props.results.word}</h2>
          <Phonetic phonetic={props.results.phonetics} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
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
