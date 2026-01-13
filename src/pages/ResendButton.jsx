import {useEffect, useState} from "react";

function ResendButton () {
    const [seconds,setSeconds] = useState(0);
    const [disabled,setDisabled] = useState(false);

    const startTimer = () => {
        setSeconds(60);
        setDisabled(true);
    }

    useEffect(() => {
        if (seconds === 0) {
            setDisabled(false);
            return;
        }

        const timer = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <div>
            <button onClick={startTimer} disabled={disabled}> Click here</button>

            {disabled && (
                <p>Please wait for {seconds} seconds.</p>
            )}
        </div>
    );
}
export default ResendButton;