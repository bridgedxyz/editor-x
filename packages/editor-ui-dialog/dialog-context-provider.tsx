import React, { useCallback, useEffect, useState } from "react";

export const __ModalContext = React.createContext(undefined);

export function ModalContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [modal, setModal] = useState();
  const unSetModal = useCallback(() => {
    setModal(undefined);
  }, [setModal]);

  return (
    <__ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} unSetModal={unSetModal} />}
    </__ModalContext.Provider>
  );
  // todo add context provider
  return <>{props.children}</>;
}

const Modal = ({ modal, unSetModal }) => {
  useEffect(() => {
    const bind = (e) => {
      if (e.keyCode !== 27 /*ESC*/) {
        return;
      }

      if (
        document.activeElement &&
        ["INPUT", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      unSetModal();
    };

    document.addEventListener("keyup", bind);
    return () => document.removeEventListener("keyup", bind);
  }, [modal, unSetModal]);

  return (
    <div className="modal">
      <button className="modal__close" onClick={unSetModal} />
      <div className="modal__inner">
        <button className="modal__close-btn" onClick={unSetModal}>
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
          </svg>
        </button>
        {modal}
      </div>
    </div>
  );
};