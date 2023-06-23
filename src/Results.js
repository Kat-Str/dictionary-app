import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div style={{ textAlign: "left" }}>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          if (index < 1) {
            return (
              <span style={{ fontWeight: "bold", opacity: "0.7" }} key={index}>
                {phonetic.text}{" "}
              </span>
            );
          } else {
            return null;
          }
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              {meaning.definitions.map(function (definition, index) {
                if (index < 1) {
                  return (
                    <div key={index}>
                      <div className="definition">{definition.definition}</div>
                      <div style={{ opacity: "0.5" }} className="example">
                        {definition.example}
                      </div>
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
