import React from "react";
import "./Input.css";
import { AiOutlinePaperClip, RiScreenshot2Line } from "../../icon";
function Input() {
  return (
    <div className="feedBackInputSection">
      <div className="feedbackInputContainer">
        <textarea
          className="messageTextInputContainer inputContainer"
          placeholder="I have an issue with..."
          maxLength={400}
        ></textarea>
        <div className="fileInputContainer">
          <div className="fileInput">
            <AiOutlinePaperClip />
          </div>
          <div className="fileInput">
            <RiScreenshot2Line />
          </div>
        </div>
      </div>
      <input
        type="email"
        className="inputContainer emailInputContainer"
        placeholder="Enter your email"
      />
      <button className="submitBtn">Submit Feedback</button>
    </div>
  );
}

export default Input;
