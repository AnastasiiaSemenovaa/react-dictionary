import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      {props.meaning.synonyms.map((values, index) => {
        if (index > 5) return <></>;
        return (
          <span className="SynonymWords" key={index}>
            {values}
          </span>
        );
      })}
      <br />
      <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index > 2) return <></>;
        return (
          <div className="Definitions" key={index}>
            <strong>➡️ </strong>
            {definition.definition}
            <br />
            <p className="Example">{definition.example} </p>
          </div>
        );
      })}
    </div>
  );
}
