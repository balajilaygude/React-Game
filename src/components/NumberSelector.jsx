import { useState } from "react";

export default function NumberSelector({error,setError ,selectedNumber,setSelectedNumber}) {

    const arr=[1,2,3,4,5,6];

    const numberSelecthandler=(value)=>{
      setSelectedNumber(value)
      setError("")
    }

  return (
    <div className="flex justify-center items-end gap-2 flex-col">
    <p className="md:text-xl text-red-600">{error}</p>
    <div className="flex gap-3">
        {arr.map((value,i)=>(
            <p onClick={()=>numberSelecthandler(value)} 
                className={`h-8 w-8
                md:h-16 md:w-16 font-bold border-2 flex justify-center items-center cursor-pointer
                ${value === selectedNumber ? "bg-black text-white border-black" : "bg-white text-black"}
                `} key={i}>{value}</p>
        ))}
    </div>
    <p className="md:text-xl font-bold ">Selected Number  </p>
    </div>
  )
}
