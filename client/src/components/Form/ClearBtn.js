import React from "react";

export const ClearBtn = props => (
  <button {...props} className="btn btn-success">
    {props.children}
  </button>
);
