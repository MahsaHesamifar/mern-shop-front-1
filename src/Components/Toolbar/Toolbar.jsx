import React, { useState } from "react";
import Popup from "../Popup/Popup";
import { useContext } from "react";
import { EditBtnContext } from "../../context/EditBtnContext";

const Toolbar = props => {
  const [isEditOn, setIsEditOn] = useState(false);
  const [editMode, setEditMode] = useContext(EditBtnContext);

  // const [popupName, setpopupName] = useState("+");
  const onEditToggleSubmit = e => {
    // e.preventDefault();
  };
  return (
    <div className="toolbar-container">
      <div className="toolbar-item edit-btn">
        <span className="edit-label">edit: </span>
        <div className="toggle">
          <form action="" onSubmit={onEditToggleSubmit}>
            <input
              type="checkbox"
              checked={editMode}
              value={editMode}
              onChange={() => {
                // setIsEditOn(!isEditOn);
                setEditMode(!editMode);
              }}
            />
          </form>

          {/* {console.log(isEditOn)} */}
        </div>
        {/* <button className="toolbar-btn edit-btn">O</button> */}
      </div>
      <div className="toolbar-item  theme-btn">
        {/* <Popup /> */}
        <Popup
          popup="theme"
          theme={props.theme}
          themeHandler={props.themeHandler}
        />
      </div>

      <div className="toolbar-item addProduct-btn">
        <Popup popup="addProduct" />
      </div>
      {/* <div className="toolbar-item addLogo-btn">
        <Popup popup="addLogo" />
      </div> */}
    </div>
  );
};

export default Toolbar;
