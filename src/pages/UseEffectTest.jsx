import {useEffect, useState} from "react";

function UseEffectTest() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
    }, [reload]);

    function reloadPost() {
        setReload((prev) => prev + 1); // always changes
    }
    return (
        <div>
            <h2> useEffect Test</h2>
            { loading &&  <p>Loading...</p>}

            {! loading && (
                <div>
                    <button onClick={reloadPost}>Reload Post</button>
                    <ol>
                        {user.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

export default UseEffectTest;