'use client'
import { useState } from "react";
import Buttons from "./components/Buttons";
export default function Home() {
  let [counter, setCounter] = useState(1)
  return(
    <>
    <div className={`page page${counter}`}>
    <div className="container flex flex-col justify-evenly items-center">
      <Buttons count={counter} setCount = {setCounter}/>
    </div>
    </div>
    </>
  )
}