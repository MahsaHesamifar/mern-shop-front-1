import React from "react";
import Nav from "../Nav/Nav";
import Toolbar from "../Toolbar/Toolbar";
import "../../style/app.scss";
import { EditBtnProvider } from "../../context/EditBtnContext";

const Header = ({ themeHandler, theme }) => {
  return (
    <div className="box-shadow">
      <Nav />
      {/* <EditBtnProvider> */}
      <Toolbar themeHandler={themeHandler} theme={theme} />
      {/* </EditBtnProvider> */}
    </div>
  );
};
export default Header;
