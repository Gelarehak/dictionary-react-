import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <h3 className="wordSynonyms">
        {" "}
        {props.synonyms.map(function (synonyms, index) {
          if (index < 5) {
            return (
              <button key={index} className="synonym">
                {synonyms}
              </button>
            );
          }
        })}
      </h3>
    );
  } else {
    return null;
  }
}
