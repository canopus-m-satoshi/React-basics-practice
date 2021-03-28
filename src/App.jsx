import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

/**
 * コンポーネントの作成
 *
 * ※コンポーネント名は必ず先頭を大文字から初める
 * このような命名方法を「パスカルケース」と呼ぶ
 */
const App = () => {
  const onClickButton = () => alert("Clicked");
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">書き方その2</ColorfulMessage>
      <ColorfulMessage color="pink">Not too bad</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App; // 別ファイルで読み込みできるようにする
