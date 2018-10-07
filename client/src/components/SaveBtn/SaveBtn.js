import React from "react";
import "./SaveBtn.css";

const SaveBtn = props => (
  <span className="save-btn" role="img" aria-label="Save" {...props}>
    ✔️
  </span>
);

export default SaveBtn;
