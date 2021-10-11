import React from "react";
import ItemEditBox from "../../ItemEditBox/ItemEditBox";
import { useContext } from "react";
import { EditBtnContext } from "../../../context/EditBtnContext";

const HomeBottomBanner = homeBottomBanner => {
  const [editMode, setEditMode] = useContext(EditBtnContext);

  return (
    <div className="homeBottomBanner-container">
      {editMode ? (
        <ItemEditBox itemName="homeBottomBanner" element={homeBottomBanner} />
      ) : (
        ""
      )}
      <div className="banner-img"></div>
    </div>
  );
};

export default HomeBottomBanner;
