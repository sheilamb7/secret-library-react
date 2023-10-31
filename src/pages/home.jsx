import React from "react";
import Header from "../header/header";
import ChallengesList from "./challenge_list";

export default function() {
  return (
    <div className="main_container">
      <Header />
      <ChallengesList />
    </div>
    

  );
}