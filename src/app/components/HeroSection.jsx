"use client";

import React from "react";
import Image from "next/image";
import Yolo from "./../../../public/Yolo.jpg";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function HeroSection() {
  const walletAddress = "BZErxuanpn7NGGTxGAyXHjXADZvNZaShjaMPN2Vpump";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => {
        toast.success("Address copied!");
      })
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  return (
    <div className="mt-[15px] lg:mt-[50px]">
      <Toaster position="top-right" />
      <div className="w-[90%] lg:w-[80%] m-auto flex flex-col-reverse sm:flex-col lg:flex-row gap-[15px] lg:gap-[80px] items-center">
        <div>
          <Image src={Yolo} alt="Zoomer Doge" width={700} height={1000} />
        </div>
        <div>
          <h2 className="text-[40px] lg:text-[70px] font-black">Zoomer Doge</h2>
          <p className="text-[17px] lg:text-[20px]">
            Zoom into the future with
            <span className="font-medium text-[#DD7E24]"> Zoomer Doge.</span>
          </p>
          <button
            onClick={handleCopy}
            className="bg-[#DD7E24] mt-[18px] lg:mt-[48px] w-[174px] h-[48px] text-[#040F15] text-[19px] rounded-[250px] hover:bg-[#ffa74c] transition duration-200"
          >
            Copy Address
          </button>
          <p className="text-[20px] mt-[10px] lg:mt-[15px] break-words">
            Address:{" "}
            <span className="text-[#DD7E24] break-all">{walletAddress}</span>
          </p>
          <div className="flex flex-wrap gap-[18px] mt-[25px] lg:mt-[90px]">
            <Link
              href="https://x.com/Zoomer_Doge"
              className="hover:cursor-pointer"
            >
              <button className="py-[8px] cursor-pointer pl-[10px] pr-[35px] flex gap-[25px] items-center bg-[#DD7E24] hover:bg-[#96b6ff] text-[#040F15] rounded-[10px] text-[30px] font-bold transition duration-200">
                <div className="w-[61px] h-[61px] bg-[#040F15] text-[#DD7E24] flex items-center justify-center text-[35px] rounded-[15px]">
                  <BsTwitterX />
                </div>
                Follow
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
