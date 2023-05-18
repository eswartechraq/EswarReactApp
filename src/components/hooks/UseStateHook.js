// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

import { useState } from "react";

function UseStateHook() {
    const [count, setCount] = useState(0);
    const onButonClick = () => {
        //Updating state value
        setCount(count + 1);
    }

    return (
        <div>
            <p>useState Hook</p>
            <p>Count value: {count} </p>
            <button onClick={onButonClick}>Click</button>
        </div>
    );
}

export default UseStateHook;