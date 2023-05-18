import { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <ChildComponent count={count} />
           
            <button onClick={increment}>Increment</button><br/>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ParentComponent;
