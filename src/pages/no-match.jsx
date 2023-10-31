import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NoMatch() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>Oops, this page doesn-t exist</h2>
      <p>I know, it's hard to concentrate between these piles of books,so you got lost! </p>
      <p>You can go back to the <Link to="/">entry of the Library</Link></p>

    </div>
    

  );
}