import { useState } from "react";
function UseState()
{
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>UseState Example:</h2>
            <p>{count}</p>
            <button onClick={ () => setCount(count + 1)}>Click Here</button>
        </div>
    );
}

export default UseState;