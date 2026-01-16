import { useState, useEffect, useRef } from "react";

function UseRefDemo()
{
    const [name, setName] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h2>useRef Demo</h2>
            <input type="text" ref={inputRef} placeholder="Type your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
    
}

export default UseRefDemo;