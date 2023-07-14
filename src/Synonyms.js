import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div title="Synonym" style={{ color: "blue", fontStyle: "italic" }}>
        {props.synonyms.map((synonym, index) => {
          return (
            <span style={{ marginRight: "15px" }} key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
