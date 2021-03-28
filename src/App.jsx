import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

/**
 * コンポーネントの作成
 *
 * ※コンポーネント名は必ず先頭を大文字から初める
 * このような命名方法を「パスカルケース」と呼ぶ
 */
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  // State：それぞれのコンポーネントが持っている可変の状態
  // stateを使用するには、useState()を用いる
  // 配列を宣言する　第一引数：stateの変数名、第二引数：stateを更新していく更新名
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">書き方その2</ColorfulMessage>
      <ColorfulMessage color="pink">Not too bad</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App; // 別ファイルで読み込みできるようにする
