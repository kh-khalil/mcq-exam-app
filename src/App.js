import React, { useState } from 'react'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Exam from './components/Exam/Exam';
import Signin from './components/Singin/Singin';

function App() {

  const [route, setRoute] = useState('signin')

  function onRouteChange(route) {
    setRoute(route)
  }
  return (
    <div className="App">

      {
        route === 'signin' ?
          <Signin onRouteChange={onRouteChange} />
          : <>
            <Navigation onRouteChange={onRouteChange} />
            <Exam />
          </>
      }
    </div>
  );
}

export default App;
