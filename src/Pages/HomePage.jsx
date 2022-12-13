import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <>
             <h1>Homepage</h1>
        <Link to="/login">
            <h1>Login</h1>
        </Link>
            <Link to="/Signup">
            <h1>Singup</h1>
            </Link>
        </>
       
    )
}

export default HomePage