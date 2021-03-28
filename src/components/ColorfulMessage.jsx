import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props; // 分割代入でprops.colorといった記述の「props」を省略できる
  const contentStyle = {
    // color: color,
    color, // jsではオブジェクト内のプロパティーと値が同一の場合、値の記述を省略できる
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
