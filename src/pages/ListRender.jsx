function ListRender()
{
    const users = ["Dev", "Viyanka", "Joy"];

    return (
        <div>
            <h2>List rendering</h2>
            <ul>
                {users.map((u, i) => (
                    <li key={i}>{u}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListRender;