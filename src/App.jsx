import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/modal";
import { IoChatbubbleSharp } from "./icon";
function App() {
  const [showModal, setShowModal] = useState(false);

  function expandParentIframe() {
    window.parent.postMessage("expand", "*");
  }
  function shrinkParentIframe() {
    window.parent.postMessage("shrink", "*");
  }

  const onToggleModel = () => {
    setShowModal((prev) => !prev);
    if (showModal) {
      shrinkParentIframe();
    } else {
      expandParentIframe();
    }
  };

  return (
    <div className="appContainer">
      {showModal ? (
        <Modal onToggleModel={onToggleModel} />
      ) : (
        <button onClick={onToggleModel} className="feedBackModalBtn">
          <IoChatbubbleSharp />
        </button>
      )}
    </div>
  );
}

export default App;
