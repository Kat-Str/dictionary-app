import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  let audioLink = props.phonetic[0].audio;
  return (
    <div
      style={{ display: "flex", alignContent: "center", alignItems: "center" }}
    >
      <div>
        {props.phonetic[0].audio && (
          <ReactAudioPlayer src={audioLink} autoPlay controls />
        )}
      </div>
      {props.phonetic.map(function (phonetic, index) {
        if (index < 1) {
          return (
            <div
              style={{
                fontWeight: "bold",
                opacity: "0.7",
                marginBottom: "15px",
                paddingLeft: "20px",
              }}
              key={index}
            >
              {phonetic.text}{" "}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
