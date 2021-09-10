import React from 'react';
import Product from '../../Categories/CategoriesProducts/product';
const ProductCategoryRow = () => {
    return (
        <div className="productCategoryRow-container">
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
