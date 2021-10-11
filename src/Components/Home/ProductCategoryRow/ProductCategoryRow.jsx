import React from "react";
import Product from "../../Categories/CategoriesProducts/product";
import ItemEditBox from "../../ItemEditBox/ItemEditBox";
import { useContext } from "react";
import { EditBtnContext } from "../../../context/EditBtnContext";

const ProductCategoryRow = productCategoryRow => {
  const [editMode, setEditMode] = useContext(EditBtnContext);

  return (
    <div className="productCategoryRow-container">
      {editMode ? (
        <ItemEditBox
          itemName="productCategoryRow"
          element={productCategoryRow}
        />
      ) : (
        ""
      )}
      <h2 className="categoryRow-title">Best Seller </h2>
      <div className="categoryRow-products">
        {/* <div className="product">product</div>
                <div className="product">product</div>
                <div className="product">product</div>
                <div className="product">product</div> */}
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductCategoryRow;
