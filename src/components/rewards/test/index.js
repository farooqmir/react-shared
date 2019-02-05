import React from "react";

const Footer = props => {
  const { width, height, color, text } = props;
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "red"
      }}
    >
      {text}
    </div>
  );
};

export default Footer;
