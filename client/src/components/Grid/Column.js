import React from "react";

export const Column = ({ width, children }) => (
  <div style={{ float: 'left', width: width }}>
    {children}
  </div>
);
