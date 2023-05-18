const ChildComponent = (props) => {
    return (
        <div>
            <p>Passing data from child to parent</p>
            <button onClick={props.increment}>Increment</button><br />
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )
}

export default ChildComponent;
