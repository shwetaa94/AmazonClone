import React from "react";
// import "./header.css";
import {Link} from 'react-router-dom'
const Home = () => {
  
  return (
    <>
      <div className="header_bottom">
        <ul className="bottomlist">
        <Link  to='/' style={{textDecoration:'none'}}>
          <li className="border">All</li>
        </Link>
          <Link to='/mobile' style={{textDecoration:'none'}}>

             <li className="border">Mobile</li>
          </Link>
          <Link to='/laptop' style={{textDecoration:'none'}}>

                <li className="border">Laptop</li>
          </Link>
          <Link to='/computer' style={{textDecoration:'none'}}>

                <li className="border">Computer</li>
          </Link>
          <Link to='/accessories' style={{textDecoration:'none'}}>
                <li className="">Accessories</li>

          </Link>
          <Link to='/watch'style={{textDecoration:'none'}}>

                <li className="border">Watch</li>
          </Link>
        </ul>
      </div>
      {/* <div className="homee">
          <img src="/images/home_img.jpg" alt="" />
      </div> */}
    </>
  );
};

export default Home;
