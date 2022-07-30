import React from 'react';

import { Route, Routes} from 'react-router-dom'

import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  //localhost:3000/
  
  return (
    <div >
      <Routes>
        <Route path='/' exact = { true }>
          <AllMeetups/>
        </Route>
        <Route path='/newMeetups'>
          <NewMeetups/>
        </Route>
        <Route path='/favorites'>
        <Favorites/> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
