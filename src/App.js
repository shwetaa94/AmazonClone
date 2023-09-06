import React from 'react';
import './App.css';
import {Routes,Route, Router} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import ProductList from './ProductList';
import ProductSinglePage from './ProductSinglePage.js';
function App() {
  return (
  <>
       <Header/>
       <Home/>
    <Routes>
       <Route path='/checkout' element={<Checkout/>} />
       <Route path ='/login'  element={<Login/>} />
       
       {/* <Route path='/all' element={<Product/>} />  */}
       <Route path='/' element={<Product/>} /> 
       <Route path='/:type' element={<ProductList/>} /> 
       <Route path='id/:id' element={<ProductSinglePage/>} /> 
       <Route path='type/:id' element={<ProductSinglePage/>} /> 

       

    </Routes>
  </>
  );
}

export default App;
