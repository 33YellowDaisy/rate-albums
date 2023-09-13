import React from "react";
import { useState } from "react";
import classes from "./Album.module.css";
import Modal from "./Modal";
import Rating from "./Rating";

function Album({ title, year, color }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [rating, setRating] = useState(null);

  function openModalHandler() {
    setModalIsVisible(true);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }

  function setRatingHandler(ratingValue) {
    console.log("ratingValue", ratingValue);
    setRating(ratingValue);
    closeModalHandler();
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onCloseModal={closeModalHandler}>
          <Rating
            onCloseModal={closeModalHandler}
            onRating={(event) => {
              const ratingValue = event.target.value; // Extract the value
              setRatingHandler(ratingValue); // Pass the value to setRatingHandler
            }}
          ></Rating>
        </Modal>
      )}
      <div className={classes.album} style={{ backgroundColor: color }}>
        <p className={classes.title}>{title}</p>
        <p className={classes.year}>{year}</p>
        {rating != null && <p>Bewertung: {rating}/10</p>}
        <button
          type="button"
          className={classes.button}
          onClick={openModalHandler}
        >
          Bewertung hinzufügen{" "}
        </button>
      </div>
    </>
  );
}
export default Album;
