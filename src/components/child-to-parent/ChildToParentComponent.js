import { useState } from 'react'
import ChildComponent from './ChildComponent';

const ChildToParentComponent = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <p>count value from child to parent: {count}</p>
            <ChildComponent increment={increment} decrement={decrement} />

        </div>
    )
}

export default ChildToParentComponent;
