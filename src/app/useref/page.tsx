"use client"
import { useEffect, useState, useRef } from 'react'

const UseRef = () => {
    //1st use case :
    // useRef can not be changed while component re-reander
    const [num, setNum] = useState(0);
    const numRef = useRef(0); // Using useRef to keep track of the number without causing a re-render
    function increaseCount() {
        setNum(num + 1);
        numRef.current += 1; // Updating the useRef value
    }
    useEffect(() => {
        console.log(`Current number: ${numRef.current}`); // Logging the useRef value
    }, [num])

    //2nd use case :
    // it can access or change dom elements
    const buttonRef: any = useRef(null); // Using useRef to access a DOM element
    useEffect(() => {
        if (buttonRef.current) {
            console.log(buttonRef.current.textContent); // Logging the text content of the button
        }
    }, []);
    const bgChange = () => {
        buttonRef.current.style.background = "red"
    }
    return (
        <>
            <div>
                <h1>{num}</h1>
                <button ref={buttonRef} onClick={increaseCount}>Increase Count</button>
                <button onClick={bgChange}>Change BG</button>
            </div>
        </>
    )
}

export default UseRef
