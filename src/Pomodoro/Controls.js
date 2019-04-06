import React from "react";

const Controls = ({ active }) => {
  return (
    <div className="Controls">
      <button id="start_stop" className="control-buttons">
        {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}
      </button>
      <button id="reset" className="control-buttons">
        &#8635;
      </button>
    </div>
  );
};

export default Controls;
