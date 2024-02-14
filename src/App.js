import React, { useState, useEffect } from 'react';
import './App.css';
import { Homepage } from './Homepage';
import {LoadingScreen} from './LoadingScreen'; // Import the LoadingScreen component
import { CrosswordGame } from  './CrosswordGame'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [clickedYes, setClickedYes] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 5900
    );
  }, []); 

  const handleYesButtonClick = () => {
    setClickedYes(true); 
  };

  return (
    <div className='body'>
      {isLoading ? (
        <LoadingScreen isLoading={isLoading}/>
      ) : clickedYes ? (
        <CrosswordGame/>
      ) : (
        <Homepage onYesButtonClick={handleYesButtonClick} />
      )}
    </div>
  );
}

export default App;
