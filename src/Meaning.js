import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      {props.meaning.synonyms.map((values, index) => {
        if (index > 6) return <></>;
        return <span className="SynonymWords">{values}</span>;
      })}
      <br />
      <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index > 2) return <></>;
        return (
          <div key={index}>
            <div className="Definitions">
              <strong>Definition➡️ </strong>
              {definition.definition}
              <br />
              <p className="Example">{definition.example} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
