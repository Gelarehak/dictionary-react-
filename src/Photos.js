import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            <div className="col-3" key={index}>
              <img src={photo.src.landscape} alt="photoWord" />;
            </div>;
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
