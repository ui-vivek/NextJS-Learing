"use client";
import React, { useMemo, useState } from "react";

export default function MyComponent() {
  const [num1, setNum1] = useState(6);
  const [num2, setNum2] = useState(5);

  const addTwoNumbers = (a: number, b: number) => {
    console.log("Starting calculation...");
    for (let i = 0; i < 1000000000; i++) {
      // Simulating a time-consuming operation
    }
    console.log("Calculation complete");
    return a * b;
  };

  // Memoize the sum calculation using useMemo hook to avoid recomputation on every render
  // The dependency array [num1, num2] ensures the sum is recalculated only when num1 or num2 changes
  const sum = useMemo(() => addTwoNumbers(num1, num2), [num1, num2]);

  const calculateSum = () => {
    console.log("Calculating sum...");
    console.log(`Sum: ${sum}`);
  };

  return (
    <div>
      <button onClick={calculateSum}>Click Me</button>
      <button onClick={()=>{setNum1(num1+2)}}>Increase</button>
    </div>
  );
}
