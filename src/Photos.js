import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos container-fluid">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-12" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="Searched word"
                    width="400"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
