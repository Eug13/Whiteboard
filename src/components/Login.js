import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { handleClick } from "../api";

// const handleClick = () => {
//     console.log( "clicked!" );
//     fetch( "/login" )
//         .then( res => res.text() )
//         .then( () => {} );
// };

const Login = () => (
    <div className="wrapper">
        <h2>This is the Login page</h2>
        <Helmet>
            <title>Login Page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
        <button onClick={ () => handleClick() }>Log in</button>

        <Link to="/" className="link">Home</Link>
    </div>
);

export default Login;
