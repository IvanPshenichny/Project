import React, { useState } from "react";

function PopUpp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };
  const closeModal = () => {
    setIsModalOpen(false);
   };
  return (
    <div>
      <main>
        <header>
          <h4>Custom Modal</h4>
        </header>
        <article>
          <p>Buy</p>
          <p>Receive</p>
        </article>
      </main>
    </div>
  );
}

export default PopUpp;
