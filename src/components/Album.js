import React from "react";
import classes from "./Album.module.css";

function Album({ title, year, color, onOpenModal}) {
  return (
    <>
      <div className={classes.album} style={{backgroundColor: color}}>
        <p className={classes.title}>{title}</p>
        <p className={classes.year}>{year}</p>

        <button type="button" className={classes.button} onClick={onOpenModal}>Bewertung hinzufügen </button>
      </div>
    </>
  );
}
export default Album;
