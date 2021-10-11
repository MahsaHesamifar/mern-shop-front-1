import React from "react";
import { useContext } from "react";
import { EditBtnContext } from "../../../context/EditBtnContext";

import ItemEditBox from "../../ItemEditBox/ItemEditBox";
const HomeTopBanner = homeTopBanner => {
  const [editMode, setEditMode] = useContext(EditBtnContext);

  return (
    <div className="homeTopBanner-container">
      {editMode ? (
        <ItemEditBox itemName="homeTopBanner" element={homeTopBanner} />
      ) : (
        ""
      )}
      <div className="header-img-container">
        <button className="btn">Buy now</button>
      </div>

      <div className="textbox-container">
        <p className="textbox">text</p>
        <p className="textbox">text</p>
        <p className="textbox">text</p>
      </div>
    </div>
  );
};

export default HomeTopBanner;
