"use client";

import { useState } from "react";
import FunctionforLCMandGCD from "./function/page";
// We used server component inside client component
const Serverandclient = () => {
const [firstNumber,setFirstNumber] = useState(0);
const [secondNumber,setSercondnstNumber] = useState(0);
const setNumber = (btn:string) => {
  let number = parseInt(prompt() || "0");
  if(btn === "first"){
    setFirstNumber(number)
  }else{
    setSercondnstNumber(number)
  }
}
  return (
    <div>
      <h1>LCM And GCD</h1>
      <h3>
        Given two integers a and b, write a function lcmAndGcd() to compute
        their LCM and GCD. The function takes two integers a and b as input and
        returns a list containing their LCM and GCD.
      </h3>
      <h4>Input: a = {firstNumber} <button onClick={()=>setNumber("first")}>Set First Number</button>, b =  {secondNumber}  
       <button onClick={()=>setNumber("second")}> Set Second Number</button></h4>
      <h4>Output: <FunctionforLCMandGCD nums = {[firstNumber,secondNumber]}/></h4>
    </div>
  );
};

export default Serverandclient;
