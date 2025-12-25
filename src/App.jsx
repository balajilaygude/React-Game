
import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  
  const [gameStart,setGameStart]=useState(false);

  const toggleGamePlay =()=>{
    setGameStart((prev)=>!prev);
  };


  return (

    <div>
      <div>
      {gameStart ? <GamePlay/> : <StartGame toggle={toggleGamePlay} /> }
      </div>
    </div>
  )
}

export default App
