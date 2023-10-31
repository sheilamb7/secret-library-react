import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import NoMatch from './pages/no-match';
import ChallengeContent from './pages/challenge_content';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NoMatch />
    },
    {
      path: "/challenges/:challenges_id",
      element: <ChallengeContent />
    }
    //<Route path="/weather/:id" render={ ({match}) => <Home id={match.params.id}/> } /> //This is the rout
  ]);

  return (
    <>
    <RouterProvider router={router} />
    {/* <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={ChallengeContent} />
          <Route component={NoMatch} />
          <div>
            <img src="web_img/secret_library_logo.png" /> 
          </div>
        <h1>Challenges</h1>
      </Switch>
      </div>
    </Router> */}
    </>
  )
}

export default App;
