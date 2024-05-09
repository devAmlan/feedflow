import React from "react";
import "./Modal.css";
import { IoCloseCircle } from "../../icon";
import dangerIcon from "../../assets/danger.png";
function Modal(props) {
  const { onToggleModel } = props;

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <h3>Share your feedback</h3>
        <div className="closeBtn" onClick={onToggleModel}>
          <IoCloseCircle />
        </div>
      </div>
      <div className="modalBody">
        <div className="bodyElement">
          <img src={dangerIcon} alt="" />
          <h3>Issue</h3>
        </div>
        <div className="bodyElement"></div>
        <div className="bodyElement"></div>
      </div>
    </div>
  );
}

export default Modal;
