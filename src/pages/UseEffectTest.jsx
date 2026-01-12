import {useEffect, useState} from "react";

function UseEffectTest() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
            setUser(data);
            setLoading(false);
        })
    }, []);

    return (
        <div>
            <h2> useEffect Test</h2>
            { loading &&  <p>Loading...</p>}

            {! loading && (
                <ol>
                    {user.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default UseEffectTest;