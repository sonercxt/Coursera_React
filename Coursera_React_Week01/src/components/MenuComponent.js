// import DishdetailComponent from "./components/DishdetailComponent";
import { useState } from "react";
import JsonData from "../dishes.json";

import DishdetailComponent from "./DishdetailComponent";

const MenuComponent = () => {
  const [product, setProduct] = useState(JsonData[0]);

  const handleClick = (pId) => {
    setProduct(JsonData[pId])
  };

  const showProduct = () => {
    let template = JsonData.map((food, index) => (
      <div className="col-lg-5 mt-3">
        <img
          onClick={() => handleClick(food.id)}
          src={food.image}
          alt={index}
          style={{ width: "400px", marginLeft: "130px" }}
        />
      </div>
    ));

    return template;
  };

  return (
    <div className="container">
      <div className="row">{showProduct()}</div>
      <DishdetailComponent product={product}/>
    </div>
  );
};

export default MenuComponent;
