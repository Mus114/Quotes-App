import React from "react";
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><a href="/"></a></li>
                <li><a href="/category/wisdom">Wisdom</a></li>
                <li><a href="/category/Family">Family</a></li>
                <li><a href="/category/motivational">Motivational</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;