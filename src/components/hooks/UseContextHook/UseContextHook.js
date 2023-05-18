import { useState, createContext, useContext } from "react";
import Component2 from "./Component2";
export const UserContext = createContext();

function UseContextHook() {
    const [user, setUser] = useState("Jesse Hall");

    const changeEvent = () => {
        setUser("Eswara");
    }

    return (
        <UserContext.Provider value={user}>
            {/* <h1>{`Hello ${user}!`}</h1> */}
            < Component2 />
            <button onChange={changeEvent}>Change User</button>
        </UserContext.Provider >
    );
}
export default UseContextHook;