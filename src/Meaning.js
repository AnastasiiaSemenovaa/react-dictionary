import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <div className="d-flex flex-column flex-sm-row">
        {props.meaning.synonyms.map((values, index) => {
          if (index > 3) return <></>;
          return (
            <span className="SynonymWords" key={index}>
              {values}
            </span>
          );
        })}
      </div>
      {/* <div className="d-flex flex-column flex-sm-row">
        {props.meaning.synonyms.map((values, index) => {
          if (index > 4) return <></>;
          return (
            <p className="SynonymWords" key={index}>
              {values}
            </p>
          );
        })}
      </div> */}
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
