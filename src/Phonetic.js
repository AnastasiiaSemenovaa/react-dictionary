import React from "react";

export default function Phonetic(props) {
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
