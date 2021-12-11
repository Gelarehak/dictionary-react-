import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="wordMeaning">
              <p className="definition">{definition.definition}</p>
              <p className="example">{definition.example}</p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
