import React from "react";
import Album from "./Album";
import Modal from "./Modal";
import Rating from "./Rating";

function AlbumList({ onOpenModal, onCloseModal, isRating }) {
  const albums = [
    {
      id: 1,
      title: "Taylor Swift",
      year: 2006,
      color: "turquoise",
    },
    {
      id:2,
      title: "Fearless",
      year: 2009,
      color: "gold",
    },
    {
      id:3,
      title: "Speak now",
      year: 2010,
      color: "#CBC3E3",
    },
  ];

  return (
    <>
    

      <ul>
        {albums.map((album, idx) => (
          <Album
            key={idx}
            title={album.title}
            year={album.year}
            color={album.color}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    </>
  );
}

export default AlbumList;
