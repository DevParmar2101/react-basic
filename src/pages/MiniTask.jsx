import { useState } from "react";

function MiniTask()
{
    const [name, setName] = useState("");
    const [list, setList] = useState([]);

    function addName() {
        if (!name) return; // this will prevent from adding blank inputs
        setList([...list, name]); // add the input data into the list
        setName(""); // this will clean the input
    }

    return (
        <div>
            <h2>Name Manager</h2>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addName}>Add</button>

            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default MiniTask;