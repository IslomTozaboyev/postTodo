import React from "react";
import ModalWrapper from "./myModalWrapper";

const Modal = ({ children, modal, setModal }) => {
  return (
    <ModalWrapper>
      <div
        onClick={() => setModal(false)}
        className={`modal ${modal ? "active" : ""}`}
      >
        <div onClick={(e) => e.stopPropagation()} className="modalContent">
          {children}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
