import React from "react";
import Header from "../header-footer/header";
import ChallengesList from "../showAllChallenges/challenge_list";

export default function() {
  return (
    <div className="main_container">
      <Header />
      <ChallengesList />
    </div>
    

  );
}