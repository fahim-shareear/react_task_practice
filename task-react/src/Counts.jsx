import { useState } from "react"
import { use } from "react"

const Count = () => {
    const [count, setCount] = useState(0);
    const increaseHandle = () =>{
        const newCount = count + 1;
        setCount(newCount);
    };

    const decreaHandle = () =>{
        if(count === 0){
            return
        }
        const newCount = count - 1;
        setCount(newCount);
    }

    const resetCount = () =>{
        setCount(0);
    }

    return(
        <>
            <div className="counts">
                <h1>Count: {count}</h1>
                <button onClick={increaseHandle}>Increase</button>
                <button onClick={decreaHandle}>Decrease</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </>
    )
}

export default Count