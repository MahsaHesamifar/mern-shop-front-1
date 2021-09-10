import BasketItem from './BasketItem';
const BasketItems = () => {
    // ! BasketItem bayad map beshe
    return (
        <div className="basketItems-container">
            <div className="basket-title">shopping basket</div>
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
        </div>
    );
};
export default BasketItems;
