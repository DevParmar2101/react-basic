import {useState} from "react";

function LoginForm ()
{
    const [form, setForm] = useState({
        username : "",
        email : "",
        password : ""
    });

    const [success, setSuccess] = useState();

    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name] : value
        }));
        setError("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.username || !form.email || !form.password) {
            setError("All fields are required.");
            return;
        }

        if (form.username.length < 3) {
            setError("Minimum 3 characters are required for username.");
            return;
        }
        if (form.password.length < 6) {
            setError("Minimum 6 characters are required for password.");
            return;
        }

        setError("");
        setSuccess("Login successful!");
        console.log("Form Submitted:", form);

        setForm({
            username: "",
            email: "",
            password: ""
        });
    }

    return (
        <div>
            <h2>Login Form</h2>

            { error && <p style={{ color: "red" }}>{error}</p> }
            { success && <p style={{ color: "green" }}>{success}</p> }

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "5px" }}>
                    <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} />
                </div>

                <div style={{marginBottom: "5px" }}>
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                </div>

                <div style={{marginBottom: "5px" }}>
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;