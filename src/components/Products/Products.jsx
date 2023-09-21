import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Search from '../SearchBox/Search';

const Products = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://backend-resturent-team-a.onrender.com/api/v1/foods')
            .then(res => res.json())
            .then(data => setFoods(data.data))
    }, [])
    return (
        <div className='container'>
            <Search />

            <div className='d-flex justify-content-between align-items-center flex-wrap'>
                {foods.map(food => <Product key={food._id} food={food}></Product>)}
            </div>
        </div>
    );
};

export default Products;
