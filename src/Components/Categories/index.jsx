import CategoriesFilter from './CategoriesFilter';
import CategoriesProducts from './CategoriesProducts';
const Categories = () => {
    return (
        <div className="Categories-container">
            <div className="Categories">
                <CategoriesFilter />
                <CategoriesProducts />
            </div>
        </div>
    );
};
export default Categories;
