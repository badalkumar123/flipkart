import React from "react";
import "./Header.css";
import flipkartimg from "../Img/flipkart-plus_8d85f4.png";
import plusimg from "../Img/plus_aef861.png";
import { KeyboardArrowDown, Search, SearchOff, ShoppingCart } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="headercontainer">
      <div className="logo">
        <div className="flipkartlogo">
          <img src={flipkartimg} alt=""></img>
        </div>
        <div className="explooreplus">
          Explore <span>Plus</span>
          <img src={plusimg} alt=""></img>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for products, brands and more"
        ></input>
        <div className="searchlogo">
          <Search />
        </div>
      </div>
      <div className="logintxt">Login</div>
      <div className="becomeaseller">Become a Seller</div>

      <div className="more">
        More
        <div className="moreicon">
          <KeyboardArrowDown />
        </div>
      </div>

      <div className="cart">
        
        <div className="carticon">
          <ShoppingCart/>
          <div className="carttxt">
          Cart
          </div>
        </div>
      </div>
    </div>
  );
}
