import React from "react";

export default function Synonyms(props) {
  console.log(props.meaning);
  if (props.synonyms >= 3) {
    return (
      <div className="Synonim">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}> {synonym}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
