"use client"

function ButtonComp({num}:any) {
    console.log("i am button from client")
  return (
    <div>
      <button onClick={()=>alert(`This data is passed from server component = ${num}`)}>Call Client</button>
    </div>
  )
}

export default ButtonComp;
