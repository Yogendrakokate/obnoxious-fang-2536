import React from "react";
import { Link } from "react-router-dom";
import Freetrial from "../Component/Freetrial";
import Employe from "./EmployeePage";
const HomePage = () => {
    return (
        <>
            <h1>Homepage</h1>
           <Employe/>
        <Link to="/login">
            <h1>Login</h1>
        </Link>
        <Link to="/Signup">
            <h1>Singup</h1>
            </Link>
            <Link to="/AddProject">
            <h1>Add Project</h1>
            </Link>
        </>
       
    )
}

export default HomePage