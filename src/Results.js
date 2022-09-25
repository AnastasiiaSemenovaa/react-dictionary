import React, { Fragment } from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="Word">{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          console.log({ indexPhonetic: index });
          if (index >= 1) return <Fragment />;
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          console.log({ indexMeanings: index });

          if (index >= 4) return <Fragment />;
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
