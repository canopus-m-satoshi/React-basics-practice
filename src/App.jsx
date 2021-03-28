import React from "react";

/**
 * コンポーネントの作成
 *
 * ※コンポーネント名は必ず先頭を大文字から初める
 * このような命名方法を「パスカルケース」と呼ぶ
 */
const App = () => {
  const onClickButton = () => alert("Clicked");
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>Helllo</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App; // 別ファイルで読み込みできるようにする
