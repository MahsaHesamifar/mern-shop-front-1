import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Toolbar from './Components/Toolbar/Toolbar';
import Home from './pages/Home';
import Authpage from './pages/Authpage';
import Categories from './pages/Categories';
import Basket from './pages/Basket';
import profile from './pages/Profile';
import Product from './pages/product';
import Profile from './pages/Profile';
import Footer from './Components/Footer';
import './style/app.scss';

const App = () => {
    const [theme, setTheme] = useState({
        palette: 'light',
    });
    const { palette } = theme;
    const themeHandler = (event) => {
        const { name, value } = event.target;
        setTheme((prevState) => ({ ...prevState, [name]: value }));
        // console.log("theme", theme);
    };

    return (
        <div className="app-container palette" data-theme-palette={palette}>
            <div className="box-shadow">
                <Nav />
                <Toolbar themeHandler={themeHandler} theme={theme} />
            </div>

            <div className="pages">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Categories" component={Categories} />
                    <Route path="/Authpage" component={Authpage} />
                    <Route path="/Basket" component={Basket} />
                    <Route path="/Profile" component={profile} />
                    <Route path="/Product" component={Product} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default App;
