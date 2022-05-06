import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  const data = [
    {
      img: "https://storiesflistgv2.blob.core.windows.net/stories/2017/09/BBD-Storify_mainbanner.jpg",
    },
    {
      img: "https://www.redbytes.in/wp-content/uploads/2019/04/how-to-make-an-app-like-flipkart.jpg",
    },
    {
      img: "https://assets.mspimages.in/wp-content/uploads/2018/10/FBB-Live.png",
    },
  ];

  return (
    <div className="slidercontainer">
      <Carousel>
        {data.map((item) => {
          return (
            <Carousel.Item>
              <img
                className="d-blockw-100"
                src={item.img}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
