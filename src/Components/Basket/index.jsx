import BasketItems from './BasketItems';
import BasketPrice from './BasketPrice';
const Basket = () => {
    return (
        <div className="basket-container">
            <div className="basket">
                <BasketItems />
                <BasketPrice />
            </div>
        </div>
    );
};
export default Basket;
