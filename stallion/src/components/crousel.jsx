import React from "react";
import { Carousel } from "flowbite-react";

export function Imgscroll() {
  return (
    <>
      <div className="crousel" style={{ height: "33rem" }}>
        <Carousel leftControl="." rightControl="." slideInterval={2000}>
          {[
            "pexels-rdne-7310015.jpg",
            "pexels-dariabuntaria-5023107.jpg",
            "pexels-tima-miroshnichenko-7009465.jpg",
            "pexels-bhabin-tamang-169332034-14676984.jpg",
          ].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="..."
              loading="lazy"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ))}
        </Carousel>
      </div>
      <div className="crousel2" style={{ height: "21rem" }}>
        <Carousel slideInterval={2000}>
          {[
            "pexels-rdne-7310015.jpg",
            "pexels-dariabuntaria-5023107.jpg",
            "pexels-tima-miroshnichenko-7009465.jpg",
            "pexels-bhabin-tamang-169332034-14676984.jpg",
          ].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="..."
              loading="lazy"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
