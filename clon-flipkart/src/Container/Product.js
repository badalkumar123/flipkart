import {
  ArrowBackIosNew,
  ArrowForwardIos,
  NavigateNext,
} from "@mui/icons-material";
import React from "react";
import "./Product.css";
import product1 from "../Img/brand10.png";
export default function Product() {

  const productdetails = [
    {
      img: 'https://rukminim2.flixcart.com/image/200/200/k3vwxow0/learning-toy/u/5/f/note-board-portable-durable-doodle-whiteboard-for-kids-and-adult-original-imafmx8nngnugzva.jpeg?q=70',
      name:'Learning & Educational Toys',
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kvsfhjk0/induction-cook-top/w/1/0/rapid-plus-tripoh0085-butterfly-original-imag8myagqjfdhcc.jpeg?q=70",
      name:'Induction Cooktops',
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/k687wy80/data-cable/micro-usb-cable/z/c/r/flipkart-smartbuy-amrpb1m01-original-imafzqgkxudgzryv.jpeg?q=70",
      name:'MobileAccessories',
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kbpeoi80/induction-cook-top/p/m/t/lifelong-super-combo-llcmb13-original-imafszmeazrdcgcx.jpeg?q=70",
      name:'Induction Cooktops',
    },

    
  ];
  return (
    <div>
      <div class="product">
        <h2 class="product-category">HOT DEALS</h2>
        <button class="pre-btn">
          <ArrowBackIosNew />
        </button>
        <button class="nxt-btn">
          <ArrowForwardIos />
        </button>
        <div class="product-container">
        {productdetails.map((item) => {
          return (
          <div class="product-card">
            <div class="product-image">
              <img src={item.img}  alt="" />
            </div>
            <div class="product-info">
              <h2 class="product-brand">{item.name}</h2>
            </div>
          </div>
          )
         })}
        </div>
      </div>
    </div>
  );
}
