import {useState} from "react";

function LoginForm ()
{
    const [form, setForm] = useState({
        email : "",
        password : ""
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name] : value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.email || !form.password) {
            setError("All fields are required");
            return;
        }

        setError("");
        console.log("Form Submitted:", form);
    }

    return (
        <div>
            <h2>Login Form</h2>

            {error && <p style={{ color: "red" }}>{error}</p> }

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;