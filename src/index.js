import React from "react";

import ReactDom from "react-dom";

const App = () => {
  return (
    // return内に複数の要素を設置したい場合には()で囲む
    <>
      {/* JSX記法では一つのタグで囲って出力しないとならない-><></>で囲むと一つのタグで囲んだのと同義となる */}
      <h1>こんにちは！</h1>
      <p>Helllo</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
