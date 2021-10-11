import React, { useContext } from "react";
import { HomeTopBannersContext } from "../../context/HomeTopBannersContext";
import { ProductCategoryRowsContext } from "../../context/ProductCategoryRowsContext";
import { HomeBottomBannersContext } from "../../context/HomeBottomBannersContext";

const ItemEditBox = props => {
  const [homeTopBanners, setHomeTopBanners] = useContext(HomeTopBannersContext);
  const [productCategoryRows, setProductCategoryRows] = useContext(
    ProductCategoryRowsContext
  );
  const [homeBottomBanners, setHomeBottomBanners] = useContext(
    HomeBottomBannersContext
  );

  const deleteHandler = () => {
    switch (props.itemName) {
      case "homeTopBanner": {
        setHomeTopBanners(
          homeTopBanners.filter(el => {
            return el.id !== props.element.homeTopBanner.id;
          })
        );

        break;
      }
      case "productCategoryRow": {
        setProductCategoryRows(
          productCategoryRows.filter(el => {
            return el.id !== props.element.productCategoryRow.id;
          })
        );
        break;
      }
      case "homeBottomBanner": {
        setHomeBottomBanners(
          homeBottomBanners.filter(el => {
            return el.id !== props.element.homeBottomBanner.id;
          })
        );
        break;
      }
      default: {
        console.log("incorrect item name");
      }
    }
  };
  const copyHandler = () => {
    switch (props.itemName) {
      case "homeTopBanner": {
        setHomeTopBanners([...homeTopBanners, { id: Math.random() }]);
        break;
      }
      case "productCategoryRow": {
        setProductCategoryRows([...productCategoryRows, { id: Math.random() }]);
        break;
      }
      case "homeBottomBanner": {
        setHomeBottomBanners([...homeBottomBanners, { id: Math.random() }]);

        break;
      }
      default: {
        console.log("incorrect item name");
      }
    }
  };
  return (
    <div className="itemEditBox-container">
      <button className="edit-btn btn">
        <i className="fas fa-pencil-alt"></i>
      </button>
      <button className="delete-btn btn" onClick={deleteHandler}>
        <i className="far fa-trash-alt"></i>
      </button>
      <button className="copy-btn btn" onClick={copyHandler}>
        <i className="far fa-copy"></i>
      </button>
    </div>
  );
};

export default ItemEditBox;
