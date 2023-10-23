import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style/Register.css';

const Signin = () => {
    const [input, setinput] = useState({
        name: '',
        email: '',
        password: ''
    });
    const Handler = (e) => {
        const { name, value } = e.target;
        setinput(values => ({ ...values, [name]: value }))
    }

    const HandlerClick = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (<>
        <div className="SigninContainer">
            <h2>Register Here</h2>
            <form action="" method="post">
                <input type="text" name="name" value={input.name} onChange={Handler} placeholder="Enter name 😎" required />
                <input type="email" name="email" value={input.email} onChange={Handler} placeholder="Enter Email 👀" required />
                <input type="password" name="password" value={input.password} onChange={Handler} placeholder="New Password ✔ " required />
                <input type="submit" onClick={HandlerClick} id="BtnCr" value="Create now" />
                <br />
                <Link to="/login">Already Accunt</Link>
            </form>
        </div>
    </>)
}

export default Signin;
