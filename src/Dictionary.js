import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handelSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Search for a word"
          className="form-control"
          onChange={keywordChange}
        />
      </form>
      <Result result={result} />
    </div>
  );
}
//documantation :https://dictionaryapi.dev/
