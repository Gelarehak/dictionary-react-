import React, { useState } from "react";
import Result from "./Result";
import "bootstrap/dist/css/bootstrap.min.css";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [result, setResult] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function pexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelskey = "563492ad6f91700001000001e5a9472e2b324b2cb61d97700a678f7c";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelskey}` } })
      .then(pexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
//documantation :https://dictionaryapi.dev/
