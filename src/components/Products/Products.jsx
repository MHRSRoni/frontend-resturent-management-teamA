import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {foods.map((food) => (
          <Product key={food._id} food={food}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
