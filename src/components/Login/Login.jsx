import "./Login.css";
import { useState } from "react";
import {Link} from "react-router-dom";
function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [errors, setErrors] = useState({});
const [message, setMessage] = useState("");
const [loginSuccess, setLoginSuccess] = useState(false);

const [showPassword, setShowPassword] = useState(false);

const [loading, setLoading] = useState(false);
function validation(){




    let validationErrors = {};

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === "") {
        validationErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
        validationErrors.email = "Enter a valid email";
    }

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (password.trim() === "") {
        validationErrors.password = "Password is required";
    } else if (!passwordPattern.test(password)) {
        validationErrors.password = "Enter a strong password";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
}

function handleSubmit(event) {

    event.preventDefault();

    if (!validation()) return;

    setLoading(true);

    setTimeout(() => {

        setLoading(false);

        if (
            email === "admin@farmfix.com" &&
            password === "Farm@123"
        ) {

            setLoginSuccess(true);

            setMessage("✅ Welcome to FarmFix!");

        } else {

            setLoginSuccess(false);

            setMessage("❌ Invalid Email or Password");

        }

    }, 2000);

}
function handleClear() {

    setEmail("");
    setPassword("");
    setErrors({});
    setMessage("");
    setLoginSuccess(false);

}
return (
    <section className="login-page">

        <div className="login-card">

            <h2>Welcome Back to FarmFix</h2>

            <p>
                Log in to manage your farm equipment service requests,
                track repairs, and connect with trusted mechanics.
            </p>
            {loading && (
    <p className="loading-message">
        Logging in...
    </p>
)}

{message && (
    loginSuccess ? (
        <p className="success-message">{message}</p>
    ) : (
        <p className="error-message">{message}</p>
    )
)}

            {/* Loading Message */}

            {/* Success / Error Message */}

            <form onSubmit={handleSubmit}>

              <input
    type="email"
    placeholder="Enter your Email Address"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
/>

{errors.email && (
    <p className="error-message">{errors.email}</p>
)}

<input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your Password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
/>

<div className="show-password">

    <input
        type="checkbox"
        id="showPassword"
        onChange={() => setShowPassword(!showPassword)}
    />

    <label htmlFor="showPassword">
        Show Password
    </label>

</div>

{errors.password && (
    <p className="error-message">{errors.password}</p>
)}

<a href="#" className="forgot-password">
    Forgot Password?
</a>

{/* <button type="submit" disabled={loading}>
    {loading ? "Logging In..." : "Login"}
</button> */}

<div className="button-group">
    <button type="submit" disabled={loading}>
        {loading ? "Logging In..." : "Login"}
    </button>

    <button type="button" onClick={handleClear}>
        Clear
    </button>
</div>

<p className="register-link">
    Don't have an account?
    <Link to="/register">Register Now</Link>
</p>
            </form>

        </div>

    </section>
);
}
export default Login;
