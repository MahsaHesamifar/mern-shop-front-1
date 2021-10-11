import { React, useEffect, useState } from "react";
import HomeTopBanner from "./HomeTopBanner/HomeTopBanner";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import HomeBottomBanner from "./HomeBottomBanner/HomeBottomBanner";
import "../../style/app.scss";
import { useContext } from "react";
import { EditBtnContext } from "../../context/EditBtnContext";
import { HomeTopBannersContext } from "../../context/HomeTopBannersContext";
import { ProductCategoryRowsContext } from "../../context/ProductCategoryRowsContext";
import { HomeBottomBannersContext } from "../../context/HomeBottomBannersContext";

const Home = () => {
  const [editMode, setEditMode] = useContext(EditBtnContext);

  const [homeTopBanners, setHomeTopBanners] = useContext(HomeTopBannersContext);
  const [productCategoryRows, setProductCategoryRows] = useContext(
    ProductCategoryRowsContext
  );
  const [homeBottomBanners, setHomeBottomBanners] = useContext(
    HomeBottomBannersContext
  );

  return (
    <div className="home-container">
      {editMode ? (
        <div>
          {" "}
          {homeTopBanners.map(homeTopBanner => {
            return <HomeTopBanner homeTopBanner={homeTopBanner} />;
          })}
          {productCategoryRows.map(productCategoryRow => {
            return (
              <ProductCategoryRow productCategoryRow={productCategoryRow} />
            );
          })}
          {homeBottomBanners.map(homeBottomBanner => {
            return <HomeBottomBanner homeBottomBanner={homeBottomBanner} />;
          })}
        </div>
      ) : (
        <div>
          {" "}
          {homeTopBanners.map(homeTopBanner => {
            return <HomeTopBanner />;
          })}
          {productCategoryRows.map(productCategoryRow => {
            return <ProductCategoryRow />;
          })}
          {homeBottomBanners.map(homeBottomBanner => {
            return <HomeBottomBanner />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
