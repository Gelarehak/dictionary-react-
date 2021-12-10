import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <p>{props.meaning.partOfSpeech}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            {definition.example}
          </div>
        );
      })}
    </div>
  );
}
