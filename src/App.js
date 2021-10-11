import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Authpage from "./pages/Authpage";
import Categories from "./pages/Categories";
import Basket from "./pages/Basket";
import profile from "./pages/Profile";
import Product from "./pages/product";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./style/app.scss";
import { EditBtnProvider } from "./context/EditBtnContext";
import { HomeTopBannersProvider } from "./context/HomeTopBannersContext";
import { ProductCategoryRowsProvider } from "./context/ProductCategoryRowsContext";
import { HomeBottomBannersProvider } from "./context/HomeBottomBannersContext";

const App = () => {
  const [theme, setTheme] = useState({
    palette: "light",
  });
  const { palette } = theme;
  const themeHandler = event => {
    const { name, value } = event.target;
    setTheme(prevState => ({ ...prevState, [name]: value }));
    // console.log("theme", theme);
  };

  return (
    <div className="app-container palette" data-theme-palette={palette}>
      <div className="pages">
        <EditBtnProvider>
          <HomeTopBannersProvider>
            <ProductCategoryRowsProvider>
              <HomeBottomBannersProvider>
                <Switch>
                  <Route path="/" exact>
                    <Header themeHandler={themeHandler} theme={theme} />
                    <Home />
                    <Footer />
                  </Route>
                  <Route path="/Categories">
                    <Header themeHandler={themeHandler} theme={theme} />
                    <Categories />
                    <Footer />
                  </Route>
                  <Route path="/Authpage" component={Authpage} />
                  <Route path="/Basket">
                    <Header themeHandler={themeHandler} theme={theme} />
                    <Basket />
                    <Footer />
                  </Route>
                  <Route path="/Profile" component={profile} />
                  <Route path="/Product">
                    <Header themeHandler={themeHandler} theme={theme} />
                    <Product />
                    <Footer />
                  </Route>
                </Switch>
              </HomeBottomBannersProvider>
            </ProductCategoryRowsProvider>
          </HomeTopBannersProvider>
        </EditBtnProvider>
      </div>
    </div>
  );
};

export default App;
