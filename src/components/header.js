import React from "react";
import cooklyLogo from "../assets/cookly_logo.png";

class Header extends React.Component {
    render() {
        return ( <
            header > { " " } <
            img src = { cooklyLogo }
            className = "Cookly-logo"
            alt = "logo" / > { " " } <
            /header>
        );
    }
}

export default Header;