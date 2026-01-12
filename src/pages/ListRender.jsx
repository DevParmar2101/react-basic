function ListRender()
{
    const users = ["Dev", "Viyanka", "Joy"];

    return (
        <div>
            <h2>List rendering</h2>
            <ol>
                {users.map((u, i) => (
                    <li key={i}>{u} </li>
                ))}
            </ol>
        </div>
    );
}

export default ListRender;