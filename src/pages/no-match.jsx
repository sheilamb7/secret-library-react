import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header-footer/header";

export default function NoMatch() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="main_container">
      <Header />
      <div className="info content-loading">
        <h2>Oops, this page doesn't exist</h2>
        <div className='loader-image no-match-image'></div>
        <p>I know, it's hard to concentrate between these piles of books, so you got lost! </p>
        <p>You can go back to the <Link to="/">entry of the Library</Link></p>
      </div>
    </div>
    

  );
}

//https://media.giphy.com/media/l0HlAgJTVaAPHEGdy/giphy.gif