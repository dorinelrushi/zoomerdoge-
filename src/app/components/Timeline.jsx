import React from "react";

const phases = [
  {
    title: "Phase 1: Booting Up 🧩",
    items: [
      "Twitter & Telegram",
      "Community starts forming",
      "First memes drop",
      "Website ready",
      "🚀 Fair Launch on pump.fun",
    ],
  },
  {
    title: "Phase 2: Going Viral 📢",
    items: [
      "Listed on DEXs",
      "Meme raids begin",
      "Community contests",
      "NFT sneak peek",
    ],
  },
  {
    title: "Phase 3: Level Up 🧠",
    items: [
      "Bigger marketing push",
      "First airdrops",
      "Zoomer Doge merch",
      "Influencer collabs",
    ],
  },
  {
    title: "Phase 4: Full Send 🌐",
    items: [
      "Utility ideas in motion",
      "DAO setup",
      "Community voting begins",
      "Zoomer Doge becomes meme legend",
    ],
  },
];

export default function ZoomerDogeTimeline() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-10  text-white rounded-xl">
      <h2 className="text-[30px] mt-[10px] lg:mt-[30px] md:text-[70px] font-bold text-center mb-12">
        Zoomer Doge Roadmap
      </h2>

      {/* Desktop Version */}
      <div className="hidden md:block relative">
        {/* Vija ne mes */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#DD7E24] z-0" />
        <div className="flex flex-col gap-12 z-10 relative">
          {phases.map((phase, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="grid grid-cols-9 items-center">
                {/* Left */}
                <div
                  className={`col-span-4 ${isLeft ? "flex justify-end" : ""}`}
                >
                  {isLeft && (
                    <div className=" border border-[#DD7E24] p-6 rounded-md w-full max-w-sm text-base">
                      <h3 className="text-[#DD7E24] font-semibold text-2xl mb-3">
                        {phase.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-200 text-lg">
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Number */}
                <div className="col-span-1 flex justify-center relative z-10">
                  <div className="w-10 h-10 bg-[#DD7E24] text-black rounded-full flex items-center justify-center font-bold shadow-md text-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Right */}
                <div
                  className={`col-span-4 ${
                    !isLeft ? "flex justify-start" : ""
                  }`}
                >
                  {!isLeft && (
                    <div className=" border border-[#DD7E24] p-6 rounded-md w-full max-w-sm text-base">
                      <h3 className="text-[#DD7E24] font-semibold text-2xl mb-3">
                        {phase.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-200 text-lg">
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex flex-col gap-8">
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start  border border-[#DD7E24] p-5 rounded-md w-full text-base relative"
          >
            <div className="absolute -top-3 -left-3 w-9 h-9 bg-[#DD7E24] text-black rounded-full flex items-center justify-center font-bold text-sm shadow-md">
              {idx + 1}
            </div>
            <h3 className="text-[#DD7E24] font-semibold text-xl mb-3 mt-3 ml-2">
              {phase.title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200 text-base ml-2">
              {phase.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
