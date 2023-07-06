import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  let audioLink = props.phonetic[0].audio;
  return (
    <div>
      {props.phonetic[0].audio && (
        <ReactAudioPlayer src={audioLink} autoPlay controls />
      )}
      {props.phonetic.map(function (phonetic, index) {
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
    </div>
  );
}
