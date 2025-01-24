import React from "react";
import "./modal.css";

function Modal({ movie, status, toggleModal }) {
  return (
    <>
      {/* Blurry background overlay */}
      <div
        className={`modalOverlay ${status ? "active" : ""}`}
        onClick={toggleModal}
      ></div>

      {/* Modal content */}
      <div className={`movieModal ${status ? "active" : ""}`}>
        <a href="#" className="modalClose" onClick={toggleModal}>
          <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe
          width="1280"
          height="720"
          src={movie.video}
          title={`${movie.title} | Official Trailer`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Modal;
