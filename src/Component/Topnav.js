import React from "react";
import "./Topnav.css";

export default function Topnav() {
  const topIc = [
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/19b17ff8cf6d89b6.png?q=100",
      txt: "Image",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/6ec8de1d47fc9ec9.png?q=100",
      txt: "Fashion",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/52e3aff0b20ad632.png?q=100",
      txt: "Electronics",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/c81945cf9e37529e.png?q=100",
      txt: "Home",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/ef8622152adb332f.png?q=100",
      txt: "Travel",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/042f2a5ff93aa6f2.png?q=100",
      txt: " Appliances",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100",
      txt: "Furniture",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/13e8cd793e692f23.png?q=100",
      txt: " Beauty,Toy & more",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/128/128/image/07a6a78f185d549a.png?q=100",
      txt: "Grocery",
    },
  ];
  console.log(topIc[1]);
  return (
    <div className="topvavcontainer">
      {topIc.map((item) => {
        return (
          <div className="mobileicon">
            <img src={item.img}></img>
            <div className="txt">{item.txt}</div>
          </div>
        );
      })}
    </div>
  );
}
