import React from "react";
import { t } from "react-switch-lang";

const Modal = (props) => {
  const { show, setShow } = props;

  return show ? (
    <div className="modal-wrapper">
      <div onClick={() => setShow(false)} className="modal-backdrop" />
      <div className="modal-box">
        {props.children}
        <h3>{t("secondStep.modalTerms")}</h3>
        <p className="modal-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <button onClick={() => setShow(!show)}>Close</button>
      </div>
    </div>
  ) : null;
};
export default Modal;
