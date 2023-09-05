import React, { useState, useEffect } from "react";
import "./Product.css";
import { Link } from "react-router-dom";


function Card(props) {
  return (
    <>
    
      <div className="products">
  {/* <Link to={`/${props.id}`} style={{textDecoration:'none', color:'black'}}> */}
        <h3>{props.name}</h3>

        <img src={props.image} alt="product-imge" />

  {/* </Link> */}
        <div className="pandc">
          <h4> Rs. {props.price}</h4>
          <button> Add to cart</button>
        </div>
      </div>
  </>
  );
}
const Product = () => {
  const [data, setdata] = useState([]);
 
  const getProducts = async () => {
    const res = await fetch("https://api.pujakaitem.com/api/products");
    setdata(await res.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="homee">
        <img src="/images/home_img.jpg" alt="" />
      </div>
     
      <div className="allproducts">
        {data.map((productt) => {
          return (
            <>
              <Card
                id={productt.id}
                name={productt.name}
                image={productt.image}
                company={productt.company}
                price={productt.price}
                description={productt.description}
                category={productt.category}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;

