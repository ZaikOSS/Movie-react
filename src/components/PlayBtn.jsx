import React, { useState } from "react";
import "./playBtn.css";
import Modal from "./Modal";

function PlayBtn({ movie }) {
  const [modal, setModal] = useState(false);

  const toggleModal = (e) => {
    if (e) e.preventDefault(); // Safely prevent default link behavior
    setModal(!modal);
  };

  if (!movie) return null; // Safeguard against undefined movie

  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : ""
        }`}
      >
        <a href="#" className="playBtn" onClick={(e) => toggleModal(e)}>
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {modal && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default PlayBtn;
