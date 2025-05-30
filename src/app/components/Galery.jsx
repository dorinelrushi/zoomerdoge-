"use client";
import React, { useState } from "react";
import One from "../../../public/1.jpg";
import Two from "../../../public/2.jpg";
import Three from "../../../public/3.jpg";
import Four from "../../../public/4.jpg";
import Five from "../../../public/5.jpg";
import Image from "next/image";

function Galery() {
  const images = [One, Two, Three, Four, Five];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="flex mt-[60px] lg:mt-[120px] overflow-hidden text-center mb-[30px] lg:mb-[80px] w-[80%] m-auto gap-[30px] flex-col lg:flex-row items-center justify-center">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="cursor-pointer"
          >
            <Image
              src={img}
              alt={`Zoomer Doge ${idx}`}
              width={300}
              height={1000}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={800}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galery;
