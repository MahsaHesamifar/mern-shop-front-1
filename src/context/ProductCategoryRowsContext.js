import { createContext, useState } from "react";

export const ProductCategoryRowsContext = createContext();

export const ProductCategoryRowsProvider = ({ children }) => {
  const [productCategoryRows, setProductCategoryRows] = useState([
    { id: Math.random() },
  ]);
  return (
    <ProductCategoryRowsContext.Provider
      value={[productCategoryRows, setProductCategoryRows]}
    >
      {children}
    </ProductCategoryRowsContext.Provider>
  );
};
