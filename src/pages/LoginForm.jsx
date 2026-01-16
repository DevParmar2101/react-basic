import { useState, useRef, useEffect } from "react";

function LoginForm ()
{
    const [form, setForm] = useState({
        username : "",
        email : "",
        password : ""
    });
    const [success, setSuccess] = useState();
    const [error, setError] = useState("");
    const emailInputRef = useRef(null);
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);


    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);


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

        if (!form.username) {
            setError("Username is required.");
            usernameInputRef.current.focus();
            return;
        }

        if (form.username.length < 3) {
            setError("Minimum 3 characters are required for username.");
            return;
        }

        if (!form.email) {
            setError("Email is required.");
            emailInputRef.current.focus();
            return;
        }

        if (!form.password) {
            setError("Password is required.");
            passwordInputRef.current.focus();
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
                    <input type="text" ref={usernameInputRef} name="username" placeholder="Username" value={form.username} onChange={handleChange} />
                </div>

                <div style={{marginBottom: "5px" }}>
                    <input type="email" ref={emailInputRef} name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                </div>

                <div style={{marginBottom: "5px" }}>
                    <input type="password" ref={passwordInputRef} name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;