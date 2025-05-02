import React, { useState, useEffect } from "react";

function ThemeBox(props) {
  const [isNightVision, setIsNightVision] = useState(false);

  useEffect(() => {
    document.body.className = isNightVision ? "dark" : "light";
  }, [isNightVision]);

  function handleNightVision() {
    setIsNightVision((prev) => !prev);
  }

  function handleFontSizeIncrease() {
    props.onIncreaseFontSize();
  }

  function handleFontSizeDecrease() {
    props.onDecreaseFontSize();
  }

  return (
    <div className="control-panel">
        <button onClick={handleFontSizeIncrease} className="font-size-increase">
          A+
        </button>
        <button onClick={handleFontSizeDecrease} className="font-size-decrease">
          A-
        </button>
      <button onClick={handleNightVision} className="themeButton">
        {isNightVision ? (
          <i className="bi bi-cloud-sun"></i>
        ) : (
          <i className="bi bi-moon-stars"></i>
        )}
      </button>
    </div>
  );
}

export default ThemeBox;
