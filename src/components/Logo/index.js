import React from "react";
import styles from "./logo.css";

const Logo = ( props ) => (
    <span className="whiteboard" style={ styles }> {props.name} </span>
);

export default Logo;
