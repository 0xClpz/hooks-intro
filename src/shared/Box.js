import React from "react";

export const Box = ({ children, ...props }) => (
  <div className="box" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <line className="top" x1="0" y1="0" x2="900" y2="0" />
      <line className="left" x1="0" y1="460" x2="0" y2="-920" />
      <line className="bottom" x1="300" y1="460" x2="-600" y2="460" />
      <line className="right" x1="300" y1="0" x2="300" y2="1380" />
    </svg>
    {children}
  </div>
);
