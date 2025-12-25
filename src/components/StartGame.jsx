import React from 'react'

export default function StartGame({toggle}) {


  return (
    <div className="min-w-screen min-h-screen md:flex justify-around items-center">
    <img src="./images/dices 1.png" alt="Dices" 
      className="" />
      <div className=' flex flex-col justify-center items-center md:items-start'>
        <h1 className='text-7xl text-center font-extrabold mb-5'>DICE GAME</h1>
        <button onClick={toggle}
         className='w-36 h-12 bg-black hover:bg-gray-800  text-white rounded-sm'>Play</button>
      </div>
    </div>
  )
}
