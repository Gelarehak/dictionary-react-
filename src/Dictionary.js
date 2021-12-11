import React, { useState } from "react";
import Result from "./Result";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [result, setResult] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <p className="header">What word do you want to look up?</p>
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              placeholder="Search for a word"
              onChange={keywordChange}
              className="form"
            />
          </form>
        </section>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
//documantation :https://dictionaryapi.dev/
