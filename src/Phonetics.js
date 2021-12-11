import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <span className="row">
      <div className=" col-2 audiobutton">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          className="audio"
        />
      </div>
      <span className=" col-2 phonetic">/{props.phonetic.text}/</span>
    </span>
  );
}
