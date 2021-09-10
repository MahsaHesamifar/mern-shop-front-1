import { useHistory } from 'react-router-dom';
const Product = () => {
    const history = useHistory();
    const pageHandler = () => {
        history.push('/Product');
    };
    return (
        <div className="Product-container">
            <div className="Product" onClick={pageHandler}>
                <div className="product-photo"></div>
                <div>Model</div>
                <div>Price</div>
                <div>info</div>
            </div>
        </div>
    );
};
export default Product;
