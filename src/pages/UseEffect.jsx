import { useEffect, useState } from "react";

function UseEffect() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    ///Runs once when component loads
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
    }, []); //empty array = run only once

    return (
        <div>
            <h1>useEffect Example</h1>

            { loading && <p>Loading...</p> }

            {! loading && (
                <ol>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default UseEffect;