import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      {props.meaning.synonyms.map((values) => {
        return <span className="SynonymWords">{values}</span>;
      })}
      <br />
      <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index > 2) return <></>;
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
