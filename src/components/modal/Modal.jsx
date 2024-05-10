import React from "react";
import "./Modal.css";
import { IoCloseCircle } from "../../icon";
import dangerIcon from "../../assets/danger.png";
import Input from "../input";
function Modal(props) {
  const { onToggleModel } = props;

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <div className="modalHeaderText">
          <h3>Share your feedback</h3>
          <p>We are always here to listen.</p>
        </div>
        <div className="closeBtn" onClick={onToggleModel}>
          <IoCloseCircle />
        </div>
      </div>
      <div className="modalBody">
        <Input />
        <p className="brandingIcon">Powered by feedFlow</p>
      </div>

      {/* <div className="modalBody">
        <div className="bodyElement">
          <img src={dangerIcon} alt="" />
          <h3>Issue</h3>
        </div>
        <div className="bodyElement"></div>
        <div className="bodyElement"></div>
      </div> */}
    </div>
  );
}

export default Modal;
