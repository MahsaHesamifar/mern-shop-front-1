import ProductPrice from './ProductPrice';
import ProductInfo from './ProductInfo';
const ProductView = () => {
    return (
        <div className="productView-container">
            <div className="productView">
                <ProductPrice />
                <div className="product-photo">Photo</div>
                <ProductInfo />
            </div>
        </div>
    );
};
export default ProductView;
