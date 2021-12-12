import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-4 " key={index}>
                <a href={photo.src.original} rel="noopener" target="_blank">
                  <img
                    src={photo.src.landscape}
                    alt="photoWord"
                    className="img-fluid photo"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
