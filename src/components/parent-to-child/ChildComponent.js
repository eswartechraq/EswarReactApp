const ChildComponent = (props) => {
    return (
        <div>
            <p>Passing data from parent to child</p>
            <h6>count value from parent to child:  {props.count}</h6>
        </div>
    )
}

export default ChildComponent;
