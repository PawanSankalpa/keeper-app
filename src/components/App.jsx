import React, { useState } from "react";
import Header from "./Header";
import InputBox from "./InputBox";
import Card from "./Card";
import ThemeBox from "./ThemeBox";
// import { Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // Importing Material UI icon

function App() {
  const [contents, setContents] = useState([]);
  const [addtofontSize, setaddtoFontSize] = useState(0);

  function handleAddMain(idea, description) {
    setContents((prevContents) => {
      return [...prevContents, { idea: idea, description: description }];
    });
  }

  function handleMainDelete(index) {
    setContents((prevContents) => {
      return prevContents.filter((content, i) => {
        return i !== index;
      });
    });
  }
  /// changing the font size
  function handleFontSizeIncreaseMain() {
    setaddtoFontSize((prevFontSize) => {
      return prevFontSize <= 6 ? prevFontSize + 1 : prevFontSize; // 22px is the maximum size and 16px is the default size
    });
  }

  function handleFontSizeDecreaseMain() {
    setaddtoFontSize((prevFontSize) => {
      return prevFontSize >= -4 ? prevFontSize - 1 : prevFontSize; // 14px is the minimum size and 16px is the default size
    });
  }
  const pfontSize = 16 + addtofontSize; //Default size is 16px, adjusting with `addtoFontSize`
  const h2fontSize = 17 + addtofontSize;

  const paragraphStyling = {
    fontSize: `${pfontSize}px`,
  };

  const titleStyling = {
    fontSize: `${h2fontSize}px`,
  };

  return (
    <div className="container">
      <ThemeBox
          onIncreaseFontSize={handleFontSizeIncreaseMain}
          onDecreaseFontSize={handleFontSizeDecreaseMain}
      />
      <Header />
      <InputBox onAdd={handleAddMain} />
      <div className="contentArea">
        {contents.map((content, index) => {
          return (
            <Card
              key={index}
              index={index}
              idea={content.idea}
              description={content.description}
              onDelete={handleMainDelete}
              titleStyling={titleStyling}
              paragraphStyling={paragraphStyling}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
