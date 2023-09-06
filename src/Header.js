import React, { useState } from "react";
import './header.css';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { useAppValue } from "./ProductContext";


function Header(){

    // const[{basket}]=useAppValue();
    const[{basket},dispatch]=useAppValue();

    return(
        <>
            <div className="header">
                {/* amazon logo */}

               <Link to ="/">

                    <img src="/images/amazon_logo.png" alt="amazon-logo" className="header_logo border" />
               </Link>
                
                 

                 {/* delver to */}
                <RoomIcon className="maplogo border"/>
                <div className="remaining border">
                    <span className="item1" >Deliver to</span>
                    <div>
                    <span className=" item2">India</span>
                    </div>
                </div>
                
                {/* search bar */}
                <div className="header_search border">
                    <input type="text" name="" id="" className="input_search"  />
                    <SearchIcon className=" searchicon" />
                </div>
                <Link to ="/login" className="linkk">

                <div className="remaining border">
                    <span className="item1"> Hello Shweta</span>
                    <span className="item2">Sign In</span>
                </div>
                </Link>
                <div className="remaining border">
                    <span className="item1">Returns</span>
                    <span className="item2">& Orders</span>
                </div>
                <div className="remaining border">
                    <span className="item1">Join</span>
                    <span className="item2">Prime</span>
                </div>

                <div className="  remaining border">
                    <Link to ="/checkout" className="linkk">
                       <div>
                            <div className="cartno">{basket?.length}</div>
        
                            <ShoppingCartIcon className="carticon"/>
                        </div>
                    </Link>  
                </div>
               

            </div>

            {/* bottom header */}
                
          
        </> 
    );
    
}
export default Header;