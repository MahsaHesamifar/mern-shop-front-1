import React from 'react';
import Nav from '../Nav/Nav';
import Toolbar from '../Toolbar/Toolbar';
import '../../style/app.scss';

const Header = ({ themeHandler, theme }) => {
    return (
        <div className="box-shadow">
            <Nav />
            <Toolbar themeHandler={themeHandler} theme={theme} />
        </div>
    );
};
export default Header;
