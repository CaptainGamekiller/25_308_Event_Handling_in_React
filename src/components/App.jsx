import React, { useState } from "react";
// 從 "react" 模組中導入 React 和 useState

function App() {
  // 定義一個名為 App 的函數型組件
  // 定義狀態變量 headingText 和其更新函數 setHeadingText，初始值為 "Hello"
  const [headingText, setHeadingText] = useState("Hello");

  // 定義狀態變量 isMousedOver 和其更新函數 setMouseOver，初始值為 false
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    // 定義一個名為 handleClick 的函數
    // 當 handleClick 被調用時，更新 headingText 的值為 "Submitted"
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    // 定義一個名為 handleMouseOver 的函數
    // 當滑鼠移到按鈕上方時，將 isMousedOver 設為 true
    setMouseOver(true);
  }

  function handleMouseOut() {
    // 定義一個名為 handleMouseOut 的函數
    // 當滑鼠移出按鈕時，將 isMousedOver 設為 false
    setMouseOver(false);
  }

  return (
    // 返回組件的 JSX 結構
    <div className="container">
      {/* 定義一個 class 為 "container" 的 div 元素 */}
      <h1>{headingText}</h1>
      {/* 顯示 headingText 的值 */}
      <input type="text" placeholder="What's your name?" />
      {/* 定義一個輸入框，提示文字為 "What's your name?" */}
      <button
        // 設定按鈕的背景顏色，當 isMousedOver 為 true 時為黑色，否則為白色
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        // 當按鈕被點擊時調用 handleClick 函數
        onMouseOver={handleMouseOver}
        // 當滑鼠移到按鈕上方時調用 handleMouseOver 函數
        onMouseOut={handleMouseOut}
        // 當滑鼠移出按鈕時調用 handleMouseOut 函數
      >
        Submit
      </button>
      {/* 定義一個按鈕，按鈕上顯示 "Submit"，當被點擊、懸停或移出時分別調用對應的事件處理函數 */}
    </div>
  );
}

export default App;
// 將 App 組件導出為默認導出
