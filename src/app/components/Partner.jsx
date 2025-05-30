import Image from "next/image";
import React from "react";
import M from "../../../public/M.svg";
import S from "../../../public/S.svg";
import E from "../../../public/E.svg";
import Z from "../../../public/Z.svg";
function Partner() {
  return (
    <div className=" mt-[15px] lg:mt-[80px]">
      <div className=" w-[80%]  lg:w-[60%] p-[10px] lg:p-[18px] m-auto text-center justify-center lg:justify-between flex flex-wrap gap-[18px] items-center border-[1px] border-[#DD7E24] rounded-[30px]">
        <Image
          src={M}
          width={140}
          height={100}
          alt="$zog"
          className="w-[120px] lg:w-[190px]"
        />
        <Image
          src={S}
          width={250}
          height={100}
          alt="$zog"
          className="w-[160px] lg:w-[250px]"
        />
        <Image
          src={E}
          width={140}
          height={100}
          alt="$zog"
          className="w-[120px] lg:w-[190px]"
        />
        <Image
          src={Z}
          width={140}
          height={100}
          alt="$zog"
          className="w-[120px] lg:w-[190px]"
        />
      </div>
    </div>
  );
}

export default Partner;
