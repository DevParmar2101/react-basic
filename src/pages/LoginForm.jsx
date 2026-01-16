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

    const refs = {
        username : useRef(null),
        email : useRef(null),
        password : useRef(null)
    };

    const validators = [
        {
            field : "username",
            check : (v) => !v,
            message : "Username is required."
        },

        {
            field : "username",
            check : (v) => v.length < 3,
            message : "Minimum 3 characters required for username."
        },

        {
            field : "email",
            check : (v) => !v,
            message : "Email is required."
        },

        {
            field : "password",
            check : (v) => !v,
            message : "Password is required."
        },

        {
            field : "password",
            check : (v) => v.length < 6,
            message : "Minimum 6 characters required for password."
        },
    ];

    useEffect(() => {
        refs.username.current.focus();
    });

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

        for (let rule of validators) {
            const value = form[rule.field];

            if (rule.check(value)) {
                setError(rule.message);
                refs[rule.field].current.focus();
                return;
            }
        }

        setError("");
        setSuccess("Login successful!");
        console.log("Form Submitted:", form);

        setForm({
            username: "",
            email: "",
            password: ""
        });

        Object.values(refs).forEach(ref => ref.current.blur());
    }

    return (
        <div>
            <h2>Login Form</h2>

            { error && <p style={{ color: "red" }}>{error}</p> }
            { success && <p style={{ color: "green" }}>{success}</p> }

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "5px" }}>
                    <input type="text" ref={refs.username} name="username" placeholder="Username" value={form.username} onChange={handleChange} />
                </div>

                <div style={{marginBottom: "5px" }}>
                    <input type="email" ref={refs.email} name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                </div>

                <div style={{marginBottom: "5px" }}>
                    <input type="password" ref={refs.password} name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;