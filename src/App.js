
import React, { useState } from 'react';
import Dialog from './components/Dialog';
import Profile from './components/Profile';


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const openModal = (isModalParam) => {
    setShowModal(true);
    if (isModalParam) {
      setIsModal(() => true)
    } else {
      setIsModal(() => false)
    }
  };


  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => openModal(true)}>Open Modal</button>
      <button onClick={() => openModal(false)}>Open Dialog</button>
      {showModal && (

        <>
          {isModal && <div className="overlay" onClick={closeModal}></div>}
          <Dialog
            title="Are you sure?"
            content={<Profile></Profile>}
            onYes={() => {
              console.log('Yes clicked');
              closeModal();
            }}
            onNo={() => {
              console.log('No clicked');
              closeModal();
            }}
            onClose={closeModal}
            isModal={isModal}
          />
        </>
      )}
    </div>
  );
};


export default App;

