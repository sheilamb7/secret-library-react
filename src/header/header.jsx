import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="main_header">
      <Link to="/">
        <img src="../web_img/SL_logo.png" alt="Secret Library Logo"/>
      </Link>
    </div>
    

  );
}