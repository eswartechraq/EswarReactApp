import { useContext } from "react";
import { UserContext } from './UseContextHook';

function Component4() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 4</h1>
            {user}
        </>
    );
}

export default Component4;