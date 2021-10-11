import { createContext, useState } from "react";

export const EditBtnContext = createContext();

export const EditBtnProvider = ({ children }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <EditBtnContext.Provider value={[editMode, setEditMode]}>
      {children}
    </EditBtnContext.Provider>
  );
};
