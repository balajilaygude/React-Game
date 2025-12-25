import NumberSelector from "./NumberSelector";
import RollDics from "./RollDics";
import ShowRule from "./ShowRule";
import TotalScore from "./TotalScore";
import { useState } from "react";


export default function GamePlay() {
    const[score ,setScore]=useState(0);
    const [selectedNumber,setSelectedNumber]=useState()
    const [currentDics,setCurrentDics]=useState(1)
    const [error,setError]=useState()
    const [rule,setRule]=useState(false)

    function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDics=()=>{
        if(!selectedNumber){
            setError("You have not selected the Number");
            return;
        }
        const randomNumber=getRandomNumber(1,7);
        setCurrentDics((prev)=>randomNumber);
    
        if(selectedNumber==randomNumber){
            setScore((prev)=>prev+randomNumber)
        }
        else{
            setScore((prev)=>prev-1)
        }

        setSelectedNumber()
    }
    function resetScore(){
        setScore(0)
    }

  return (
    <div className="min-w-screen flex justify-center items-center flex-col">
        <div className="w-full flex md:justify-around jusctify-center md:flex-row flex-col items-center pt-2">
            <TotalScore score={score}/>
            <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDics currentDics={currentDics} roleDics={roleDics}/>
        <div className="flex flex-col">
        <button className=" mt-2 w-36 p-1 border-2 rounded-sm "
        onClick={resetScore}>Reset Score</button>
        <button className=" my-2 w-36 p-1 border-2 bg-black text-white border-black rounded-sm "
        onClick={()=>setRule(prev=>!prev)}>Show Rule</button>
        </div>
        {rule &&<ShowRule/>}

    </div>
  )
}
