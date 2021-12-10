import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <p>{props.result.word}</p>
        <h1>{props.result.phonetic}</h1>
        <h3> synonym</h3>
        {props.result.meanings.map(function (meaning, index) {
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
