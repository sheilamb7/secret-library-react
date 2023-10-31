import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="main_footer">
      Go back to <Link to="/">Homepage</Link>
    </div>
    
  );
}