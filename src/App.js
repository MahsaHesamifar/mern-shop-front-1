import React, { useState } from 'react';
import Footer from './Components/Footer';
import Basket from './Components/Basket';
import ProductView from './Components/ProductView';
import Categories from './Components/Categories';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Toolbar from './Components/Toolbar/Toolbar';
import './style/app.scss';

// function App() {
//     return (
//         <div className="App-container">
//             {/* <ProductView /> */}
//             <Categories />
//             {/* <Basket /> */}
//             <Footer />
//         </div>
//     );
// }

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
                <Home />
            </div>
            <Categories />
            <Footer />
        </div>
    );
};

export default App;
