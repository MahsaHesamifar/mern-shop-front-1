import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './LogoBtn';

const Nav = () => {
    return (
        <nav className="Nav-bar">
            <ul className="ul">
                <li className="li li-logo">
                    <div className="logo-btn">
                        <Logo />
                    </div>
                </li>
                <li className="li li-search">
                    <form className="input-container">
                        <input
                            className="search-input"
                            type="text"
                            placeholder=" Search"
                        />
                    </form>
                </li>
                <li className="li li-item home-page">
                    <Link to="/" className="a-item">
                        Home
                    </Link>
                </li>
                <li className="li li-item">
                    <Link to="/Categories" className="a-item">
                        categories
                    </Link>
                </li>
                <li className="li li-item">
                    <Link to="/Basket" className="a-item">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </li>
                <li className="li li-profile">
                    <div className="profile-btn">
                        <Link to="/Authpage">P</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;
