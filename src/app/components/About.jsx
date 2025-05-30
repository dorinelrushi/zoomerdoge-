import React from "react";
import BG from "../../../public/BG.jpg";
import Image from "next/image";
function About() {
  return (
    <div>
      <div className="w-[80%] m-auto flex flex-wrap justify-between gap-[30px] mt-[40px] lg:mt-[180px]">
        <div>
          <h2 className="text-[70px] font-black">About</h2>
          <p className="max-w-[650px] text-[18px] lg:text-[20px] mt-[28px]">
            $ZOG is the ultimate GenZ meme coin a rebellious digital token born
            to vibe, not comply. Powered by internet culture, irony, and
            community chaos, $ZOG represents a generation that doesn’t take life
            too seriously but knows how to move markets. It's not just a coin,
            it’s a statement of vibes, freedom, and late-night memes. Whether
            you're here to hodl, trade, or just flex, $ZOG keeps it fresh,
            fearless, and full of fun.
          </p>
          {/* */}
          <div className="mt-[28px]">
            {/* */}
            <div>
              <p className="text-[20px] text-[#DD7E24]">
                Project Name:
                <span className="text-[white]">&nbsp;Zoomer Doge</span>
              </p>
            </div>
            {/* */}
            {/* */}
            <div>
              <p className="text-[20px] text-[#DD7E24]">
                Symbol:<span className="text-[white]">&nbsp;$ZOG</span>
              </p>
            </div>
            {/* */}
            {/* */}
            <div>
              <p className="text-[20px] text-[#DD7E24]">
                Chain:<span className="text-[white]">&nbsp;Solana</span>
              </p>
            </div>
            {/* */}
            {/* */}
            <div>
              <p className="text-[20px] text-[#DD7E24]">
                Category:
                <span className="text-[white]">
                  &nbsp; Meme Coin / Community Token
                </span>
              </p>
            </div>
            {/* */}
            {/* */}
            <div>
              <p className="text-[20px] text-[#DD7E24]">
                Date:<span className="text-[white]">&nbsp;Coming Soon</span>
              </p>
            </div>
            {/* */}
          </div>
          {/* */}
        </div>
        <div>
          <Image
            src={BG}
            className="border-[1px]  shadow-2xl shadow-[#1a457d] rounded-[50px]"
            width={700}
            height={100}
            alt="$zog"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
