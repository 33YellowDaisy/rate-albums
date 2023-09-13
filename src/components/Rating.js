import React from "react";
import classes from "./Rating.module.css";

function Rating({onCloseModal, onRating}) {
  const ratingOptions = [];
  for (let i = 1; i < 11; i++) {
    ratingOptions.push(
      <div key={i} className={classes.radioContainer}>
        <input type="radio" value={i} id={`rating-${i}`} name="rating" />
        <label htmlFor={`rating-${i}`}>{i}</label>
      </div>
    );
  }
  return (
    <>
      <h3>Bewertung</h3>
      {ratingOptions}
      <div className={classes.buttons}>
        <button className={classes.button} type="button" onClick={onCloseModal}>
          Abbruch
        </button>
        <button className={classes.button} onClick={(event) => onRating(event)}> Bewerten</button>
      </div>
    </>
  );
}

export default Rating;
