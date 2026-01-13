import {useEffect, useState} from "react";

function UseEffectCleanup() {
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;
        console.log("Effect Started");

        const interval = setInterval(() => {
            console.log("Running...");
        },1000);

        //Cleanup Function
        return () => {
            clearInterval(interval);
            console.log("Effect cleaned up");
        };
    }, [running]);

    return (
        <div>
            <h2>useEffect Cleanup</h2>

            <button onClick={() => setRunning(!running)}>
                {running ? "Stop" : "Start"}
            </button>
        </div>
    );
}

export default UseEffectCleanup;
