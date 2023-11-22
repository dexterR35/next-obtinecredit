import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import cardImg from "../public/assets/Free.png";
const Services = () => {
  const dataCards = [
    {
      img: cardImg,
      imgSecond: "test",
      title: "Credite de nevoi personale",
      description:
        "Obțineți creditul de nevoi personale de care aveți nevoie cu ușurință și rapid. Echipa noastră de experți vă stă la dispoziție pentru a vă oferi soluții financiare personalizate, adaptate nevoilor dumneavoastră. Simplu, eficient, și fără complicații.",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "Refinantari",
      description:
        "Optați pentru refinanțare cu încredere. Echipa noastră vă asigură soluții personalizate pentru a consolida și eficientiza datoriile dvs. Există oportunități noi pentru un viitor financiar mai stabil.",
    },
    {
      img: cardImg,

      imgSecond: "test",
      title: "Credite Imobiliare",
      description:
        "Asigurați-vă viitorul cu un credit imobiliar adaptat nevoilor dumneavoastră. Echipa noastră vă ghidează pas cu pas în procesul de obținere a unui credit pentru casa visurilor voastre. Investiția în confortul dumneavoastră începe aici.",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "Stergere din biroul de credit",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus!",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "credite IMM-uri",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus!",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "Leasing Auto",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus",
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="services"
    >
      <div className="max-w-screen-2xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed uppercase"
            >
              Gasim cele mai bune solutii pentru tine
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Lets choose the package that is best for you and explore it
              happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>

          <div className="grid grid-flow-row sm:grid-flow-row grid-cols-3 gap-4 py-2 lg:py-12 px-6 sm:px-0 lg:px-6 bg-white">
            {dataCards.map((card, index) => (
              <ScrollAnimationWrapper
                className="flex justify-center"
                key={index}
              >
                <motion.div
                  variants={scrollAnimation}
                  className="cursor-pointer flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-2 xl:px-5 w-[25rem] h-[90%] bg-white-500 "
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-2 lg:p-0 mt-4 mb-2 flex flex-row items-center bg-gradient-to-b from-white-300 to-white-500 w-full justify-around rounded-md">
                    <Image
                      src={card.img}
                      width={80}
                      height={80}
                      alt="Free Plan"
                    />
                    <p className="text-lg md:text-xl text-black-600 font-medium capitalize my-2 sm:my-2 bg-black-300 w-[60%]">
                      {card.title}
                    </p>
                  </div>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-4">
                    <p className="text-sm text-black-600 text-start mb-4 ">
                      {card.description}
                    </p>
                    {/* <ButtonPrimary className="h-[20px]">
                      Afla mai multe
                    </ButtonPrimary> */}
                    <div className="text-end pr-10 mt-1 text-sm">
                      afla mai multe...
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            {/* <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Huge Global Network of Fast VPN{" "}
            </motion.h3> */}
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              {dataCards.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  className={`h-${
                    index % 2 === 0 ? 14 : 12
                  } w-auto mt-4 lg:mt-0`}
                  alt="img"
                />
              ))}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Echipa Noastră: Consultanți Financiari{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Lets subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Intra online</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;
