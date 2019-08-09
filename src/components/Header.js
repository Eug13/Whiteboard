import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = ( { title } ) => (
    <div className="menu-row">
        <Logo name={ title } />
        <Menu />
    </div>
);

export default Header;
