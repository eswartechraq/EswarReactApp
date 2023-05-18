import { useState } from 'react';
function FormSubmit() {
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [userDetails, setuserDetails] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setuserDetails(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={userDetails.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={userDetails.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
            {isFormSubmitted &&
                <div>
                    user name: {userDetails.username}<br />
                    age: {userDetails.age}
                </div>
            }
        </>
    )
}
export default FormSubmit;