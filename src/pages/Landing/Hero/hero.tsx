import React from "react";
import HERO_BANNER from "../../../assets/images/hero_banner.png";
import { Button } from "@chakra-ui/react";
import P1 from "../../../assets/images/p1.svg";
import P2 from "../../../assets/images/p2.svg";
import P3 from "../../../assets/images/p3.svg";
import P4 from "../../../assets/images/p4.svg";
import PLEASUREICON from "../../../assets/images/pleasure_icon.svg";

const Hero = () => {
  return (
    <section id="hero" className="hero mt-8 mb-12">
      <div className="flex justify-between items-center gap-16">
        <div className="basis-3/5 flex flex-col gap-12">
          <div className="">
            <h1 className="text-[52px] font-bold">
              Wholesome by WH: Your Gateway to a Healthier Life
            </h1>
          </div>
          <div className="h-[2px] rounded-lg w-full bg-black"></div>
          <div className="flex flex-col gap-8">
            <div className="join flex gap-8 items-center">
              <div className="flex">
                <img
                  loading="lazy"
                  src={P1}
                  className="rounded-full  bg-[#cfcffc]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={P2}
                  className="rounded-full ml-[-1rem] bg-[#cfcffc]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={P3}
                  className="rounded-full ml-[-1rem] bg-[#b2eef3]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={P4}
                  className="rounded-full ml-[-1rem] bg-[#f9d8c0]"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <h4 className="text-4xl">
                  JOIN OUR COMMUNITY OF AUTHORS AND READERS!
                </h4>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="p-8 border border-black bg-[#f3b870] rounded-[16px_16px_16px_0px] text-xl">
                Start to read
              </Button>
              <Button className="p-8 border border-black bg-[#f0f0f0] rounded-[16px] text-xl">
                Become an author
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-2/5 flex flex-col gap-8">
          <div className="w-full">
            <img
              className="w-full"
              loading="lazy"
              width={496}
              height={496}
              src={HERO_BANNER}
              alt=""
            />
          </div>
          <div className="flex gap-8 hero-bottom">
            <div className="bg-[#f1f0fe] p-4 rounded-[0px_24px_24px_24px] flex flex-col items-end gap-8">
              <div className="flex items-center gap-4 w-full">
                <div className="rating-number">
                  <h2 className="text-4xl font-bold">4.97</h2>
                </div>
                <div className="flex-1 rating">
                  <div className="stars"></div>
                  <div className="text">
                    <p className="text-dark">On App Store & Google Play</p>
                  </div>
                </div>
                <div className="bg-black rounded-full p-2">
                  <img loading="lazy" src={PLEASUREICON} alt="" />
                </div>
              </div>
              <div className="card-left-bottom">
                <p className="text-dark">
                  "It's not just about passive consumption; it's about actively
                  engaging with others who share my passion for learning."
                </p>
              </div>
            </div>
            <div className="bg-[#fbe8d1] p-4 rounded-[24px_24px_0px_24px] flex flex-col items-end gap-8">
              <div className="monitization-btn">
                <button>Monitization</button>
              </div>
              <div className="monitization-text">
                <h2 className="text-2xl">Write. Inspire. Get rewarded.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
