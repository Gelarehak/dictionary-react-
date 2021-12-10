import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="wordMeaning">
            <p className="definition">{definition.definition}</p>

            <p className="example">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
