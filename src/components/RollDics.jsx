import { useState } from "react";

export default function RollDics({currentDics ,roleDics }) {

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <div >
        <img className="hover:cursor-pointer" onClick={roleDics}
         src={`./images/dice_${currentDics}.png`} alt="dics" />
      </div>
      <p className="">Click To Dics to Roll</p>
    </div>
  )
}
