import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./menu.css";

const Menu = ( { loggedIn } ) => (
    <span className="menu" style={ styles }>
        <NavLink to="/" className="link" >Home</NavLink>
        <NavLink to="/wod" className="link" >Wod</NavLink>
        <NavLink to="/login" className="link" >Login</NavLink>
        { loggedIn && <NavLink to="/about" className="link">About</NavLink> }
        { loggedIn && <NavLink to="/secret" className="link">Secret</NavLink> }
    </span>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Menu );
