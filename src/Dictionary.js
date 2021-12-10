import React from "react";

export default function Dictionary() {
  function handelSubmit(event) {
    event.preventDefault();
  }
  function keywordChange(event) {
    console.log(event.target.value);
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
