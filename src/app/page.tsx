"use client";
import { useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);
  const changeName = () => {
    console.log(num);
    setNum(num + 1);
  };
  function InComp(props:any){
    return (
      <div>
      <p>THIS IS INNER COMPONENT : {props.number} ,,, {typeof(props) == "number" ? props : "Na"}</p>
      </div>
    )
  }
  return (
    <div>
      <p>{num}</p>

      <button onClick={() => changeName()}>Clicl Me</button>
      <InComp number = {num} />
      {InComp(num)}
    </div>
  );
};
export default Home;
