import { useState } from 'react';
const BasketItem = () => {
    //! ino bayad az data base beghirim
    const [numberItem, setNumberItem] = useState(1);
    const minusItemHandeler = () => {
        if (numberItem > 0) {
            setNumberItem(numberItem - 1);
        }
    };
    const addItemHandeler = () => {
        setNumberItem(numberItem + 1);
    };
    return (
        <div className="basketItem-container">
            <div className="basket-Item-photo">photo</div>
            <div className="basket-Item-info">
                <div className="basket-Item-number">
                    <button onClick={minusItemHandeler}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <div>{numberItem}</div>
                    <button onClick={addItemHandeler}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="goods-info">
                    <div className="goods-title">Title</div>
                    <div className="goods-text-info">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BasketItem;
