// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)

import { useState, useEffect } from "react";

function UseEffectHook() {
    const [count, setCount] = useState(0);
    // const [name, setName] = useState(0);

    // useEffect(() => {
    //     console.log("UseEffect Re render");
    // },);

    // useEffect(() => {
    //     //Runs only on the first render
    // }, []);

    // useEffect(() => {
    //     //Runs on the first render
    //     //And any time any dependency value changes
    // }, [prop, state]);

    useEffect(() => {
        alert("rendwer");
        // setTimeout(() => {
        //     alert("render");
        // }, [1000]);
    }, [count]); //  //Runs only on the first render
    const onButonClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>component rendered {count} times!</h1>
            <button onClick={onButonClick}>Click</button>
        </div>
    );
}

export default UseEffectHook;