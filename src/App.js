import {useState} from 'react';
import './App.css';
import AlbumList from './components/AlbumList';

//hier brauchen wir den state, ob das Modal angezeigt werden soll: modalIsVisible

//fallsModalisVisible conditional in der AlbumList anzeigen

//Handler der modalIsVisible setzt 
function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function openModalHandler() {
    setModalIsVisible(true);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }


  return (
    <AlbumList onOpenModal={openModalHandler} onCloseModal={closeModalHandler} isRating={modalIsVisible}/>
  );
}

export default App;
