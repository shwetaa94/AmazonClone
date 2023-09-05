import React,{useState,useEffect} from 'react'
import { Link,} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './ProductSinglePage.css';

function SinglePage(props){
    return(
        <div className="singlepage">
             <div className="leftpage">
                <img src={props.image} alt="productimage" />
             </div>
             <div className="rightpage">
                 <div className="pname"><h1> {props.name}  </h1></div>
                 <br />
                 <div className="price"> <h3> Price:  {props.price}</h3></div>
                 <div className="price"> <h3> Company: {props.company}</h3></div>
                 <br />
                 <div className="description"><h3>Product Details:</h3>{props.description}</div>
             </div>
     
        </div>
         
    );
}
const ProductSinglePage = () => {
    const [productlist,setproductlist]=useState([]);
    const {id}=useParams();

   
    useEffect(() => {
        getProducts();
      }, []);
    useEffect(() => {
        getProducts();
      }, [id]);

    const getProducts = async () => {
        const res = await fetch("https://api.pujakaitem.com/api/products");
        setproductlist(await res.json());
      };
    
  return (
    <>
        
        {productlist.map((productt) => {
            if(productt.id===id){

           
                return (
                  <>
                    <SinglePage
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
            }
        })}
    
    
    </>
  )
}

export default ProductSinglePage