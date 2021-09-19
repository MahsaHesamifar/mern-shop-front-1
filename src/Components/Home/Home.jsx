import React from 'react';
import HomeTopBanner from './HomeTopBanner/HomeTopBanner';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import HomeBottomBanner from './HomeBottomBanner/HomeBottomBanner';
import '../../style/app.scss';

const Home = () => {
    return (
        <div className="home-container">
            <HomeTopBanner />
            <ProductCategoryRow />
            <HomeBottomBanner />
        </div>
    );
};

export default Home;
