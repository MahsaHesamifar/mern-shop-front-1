import { useState } from 'react';
const CategoriesFilterOption = () => {
    const [click, setClick] = useState(false);
    const [range, setRange] = useState(100);

    const showOptionHandeler = () => {
        setClick(!click);
    };
    const onchangeRangeHandeler = (e) => {
        setRange(e.target.value);
    };
    return (
        <div className="CategoriesFilterOption-container">
            <div className="CategoriesFilterOption">
                <div className="filter-option">
                    {click ? <div>Price : {range}$</div> : <div>Price</div>}
                    <button onClick={showOptionHandeler}>
                        <i className="fas fa-sort-down"></i>
                    </button>
                </div>
                {click ? (
                    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    <div className="price-range">
                        <p>1</p>
                        <input
                            className="filter-slider"
                            type="range"
                            min="1"
                            max="100"
                            value={range}
                            onChange={onchangeRangeHandeler}
                        />
                        <p>100</p>
                    </div>
                ) : // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                null}
            </div>
        </div>
    );
};
export default CategoriesFilterOption;
