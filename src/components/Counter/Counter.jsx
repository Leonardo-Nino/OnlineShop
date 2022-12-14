import { useState } from "react"

const Counter = ({stock = 6, initial=1, onAdd}) => {

    const [count, setCount]= useState(initial)


    const increase  = () => {
        if(count < stock){
        setCount (count + 1)
        }
    }

    const decrease = () => {
        if(count > initial) {
            setCount (count - 1 )
        }
    }

    const handleOnAdd = () => onAdd(count)



return (
    <div className="d-flex gap-2 mt-2">
        <button onClick={decrease} >-</button>
        <h3>{count}</h3>
        <button onClick={increase} >+</button> 
        <br></br >
        <button onClick={handleOnAdd} >Add Cart</button>
    </div>
    )
}

export default Counter