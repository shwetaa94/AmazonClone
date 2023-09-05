import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import './ProductSinglePage.css';

function SinglePage(props){
    return(
        <div className="singlepage">

        <h1>testing failed</h1>
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
        <div >
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
      </div>
    
    </>
  )
}

export default ProductSinglePage