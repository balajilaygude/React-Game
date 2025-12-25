import React from 'react'

export default function TotalScore({score}) {
  return (
        <div className='md:max-w-36 w-full text-center'>
            <h1 className='md:text-8xl text-4xl font-bold'>{score}</h1>
            <p className='font-sans'>Total Score</p>
        </div>
  )
}
