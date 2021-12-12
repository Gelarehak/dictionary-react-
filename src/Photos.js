import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            <div className="col-3" key={index}>
              <a href={photo.src.original} rel="noopener" target="_blank">
                <img
                  src={photo.src.landscape}
                  alt="photoWord"
                  className="img-fluid"
                />
                ;
              </a>
            </div>;
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
