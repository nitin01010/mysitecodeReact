import React, { useState } from "react";
import './style/Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    const [input, setinput] = useState({
        email: '',
        password: ''
    });
    const Handler = (e) => {
        const { name, value } = e.target;
        setinput(values => ({ ...values, [name]: value }));
    }

    const HandlerClick = (e) => {
        e.preventDefault();
        setinput({ email: '', password: '' });
    }
    return (<>
        <div className="LoginContainer">
            <h1 className="Loginh1">Login</h1>
            <form>
                <input type="email" name="email" value={input.email} onChange={Handler} placeholder="enter email 👀" required />
                <input type="password" name="password" value={input.password} onChange={Handler} placeholder="enter password ✔" required />
                <button className="LoginBtn" onClick={HandlerClick}>Login</button>
                <br /><br />
                <Link to="/signin">Create Accunt</Link>
            </form>
        </div>
    </>)
}

export default Login;
