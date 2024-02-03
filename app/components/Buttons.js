'use client'
import { useState } from "react"
import OutputField from "./OutputField"
import Switch from "./Switch"
export default function Buttons({count, setCount}){

    let [value, setValue] = useState("")
    function handleDel(){
        typeof value == String? setValue(value => value.slice(0, -1)): setValue(value => value.toLocaleString().slice(0, -1))
    }
    function handleReset(){
        setValue("")
    }
    function handleEval(){
        setValue(Number(eval(value)).toLocaleString())
    }
    let handleDigit = (e) => {
        setValue(oldValue => oldValue + e.target.value)
    }
    let handleOperand = (e) =>{
       if (e.target.value == "*" || e.target.value == "/" || e.target.value == "+"){
            if(!isNaN(value[value.length-1])){
                setValue(oldValue => oldValue + e.target.value)
            } else if(isNaN(value[value.length-1]) && isNaN(value[value.length-2])){
                setValue(oldValue => oldValue.slice(0,value.length-2) + e.target.value)
            } 
            else if(isNaN(value[value.length-1]) && !isNaN(value[value.length-2])){
                setValue(oldValue => oldValue.slice(0,value.length-1) + e.target.value)
            }
        } else if(e.target.value == "-"){
            if(value[value.length-1] != "-" && value[value.length-2] != "-"){

                setValue(oldValue => oldValue + e.target.value)
            }
        }
    }
    return(
    <div>
        <Switch count = {count} setCount = {setCount}/>
        <OutputField output = {value} count = {count}/>
        <div className={`btnContainer btnCont${count}`}>
            <button value="7" className={`btn btn${count}`} onClick={handleDigit}>7</button>
            <button value="8" className={`btn btn${count}`} onClick={handleDigit}>8</button>
            <button value="9" className={`btn btn${count}`} onClick={handleDigit}>9</button>
            <button className={`btn sbtn${count}`} onClick={handleDel}>DEL</button>
            <button value="4" className={`btn btn${count}`} onClick={handleDigit}>4</button>
            <button value="5" className={`btn btn${count}`} onClick={handleDigit}>5</button>
            <button value="6" className={`btn btn${count}`} onClick={handleDigit}>6</button>
            <button value={`+`} className={`btn btn${count}`} onClick={handleOperand}>+</button>
            <button value="1" className={`btn btn${count}`} onClick={handleDigit}>1</button>
            <button value="2" className={`btn btn${count}`} onClick={handleDigit}>2</button>
            <button value="3" className={`btn btn${count}`} onClick={handleDigit}>3</button>
            <button value={`-`} className={`btn btn${count}`} onClick={handleOperand}>-</button>
            <button value={`.`} className={`btn btn${count}`} onClick={ e => !isNaN(value[value.length-1]) && setValue(oldValue => oldValue + e.target.value)}>.</button>
            <button value="0" className={`btn btn${count}`} onClick={handleDigit}>0</button>
            <button value={`/`} className={`btn btn${count}`} onClick={handleOperand}>/</button>
            <button value={`*`} className={`btn btn${count}`} onClick={handleOperand}>x</button>
            <button className={`btn col-start-1 col-end-3 sbtn${count}`} onClick={handleReset}>RESET</button>
            <button className={`btn col-start-3 col-end-5 ebtn${count}`} onClick={handleEval}>=</button>
        </div>
    </div>
    )
}