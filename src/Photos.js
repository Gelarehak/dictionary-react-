import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photos, index) {
            <div className="col-3" key={index}>
              <img src={photos.src.landscape} alt="photoWord" />;
            </div>;
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
