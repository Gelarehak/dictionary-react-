import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.Log(response);
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
    </div>
  );
}
//documantation :https://dictionaryapi.dev/
