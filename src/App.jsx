/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

/**
 * コンポーネントの作成
 *
 * ※コンポーネント名は必ず先頭を大文字から初める
 * このような命名方法を「パスカルケース」と呼ぶ
 */
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  // State：それぞれのコンポーネントが持っている可変の状態
  // stateを使用するには、useState()を用いる
  // 配列を宣言する　第一引数：stateの変数名、第二引数：stateを更新していく更新名

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">書き方その2</ColorfulMessage>
      <ColorfulMessage color="pink">Not too bad</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
      {/* 論理演算子->左辺&&右辺　(左辺がtrueの時に右辺を返す)　faceShowFlagがtrueの時に<p>(^^♪</p>を返す */}
    </>
  );
};

export default App; // 別ファイルで読み込みできるようにする
