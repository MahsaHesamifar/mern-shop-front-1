const ProductPrice = () => {
    return (
        <div className="ProductPrice-container">
            <div className="productPrice-set-position">
                <div className="productPrice">
                    <div className="add-to-shoppingCard">
                        <div>Price info</div>
                        <button className="shopping-card-text">
                            Add to shopping card
                        </button>
                        <button className="shopping-card-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                    <div className="other-price-info">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductPrice;
