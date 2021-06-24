import { useState } from "react"


export function Button() {

  const [counter, setCounter] = useState(0);

  function imcrement() {
    setCounter(counter + 1)
    console.log(counter)
  }
  return (
    <button onClick={imcrement}> {counter} </button>
  )
}