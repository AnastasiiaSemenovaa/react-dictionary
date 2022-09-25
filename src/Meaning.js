import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <span className="SynonymWords">{props.meaning.synonyms}</span>
      <br />
      <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="Definitions">
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <p className="Example">{definition.example}</p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
