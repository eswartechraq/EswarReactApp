import { useRef } from 'react';
const UseRefHook = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value="Rwcgtdvfdv";
    };
    return (
        <div>
            <input type="text" ref={inputElement} /><br />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
export default UseRefHook;