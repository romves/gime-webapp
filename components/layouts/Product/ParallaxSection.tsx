"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const ParallaxSection = () => {
  const ref = useRef<null | any>(null);
  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: ["start start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], ["0", "-150%"]);
  const layer2 = useTransform(scrollYProgress, [0, 1], ["0", "-20%"]);
  const layer3 = useTransform(scrollYProgress, [0, 1], ["0", "25%"]);
  return (
    <>
      <div
        ref={ref}
        className="relative px-1 py-24 lg:py-32 font-grotesk text-[17vw] w-full justify-center flex flex-col items-center leading-[.9] z-20"
      >
        <div className="text-stroke z-20">AI Assistant</div>
        <motion.div>AI Assistant</motion.div>
        <div className="text-stroke z-20">AI Assistant</div>

        <motion.div
          style={{ y: layer2 }}
          className="absolute inset-0 z-0 bottom-0 flex items-start"
        >
          <Image
            src="/images/floating2.png"
            alt="assistant-product"
            width={300}
            height={300}
            className="absolute right-1 lg:right-5 top-[55%] lg:top-[50%] z-10  w-[25%] lg:w-[20%]"
          />
        </motion.div>

        <motion.div
          style={{
            y: layer1,
          }}
          className="absolute inset-0 z-20 bottom-0 flex items-start"
        >
          <Image
            src="/images/floating1.png"
            alt="assistant-product"
            width={300}
            height={300}
            className="mt-[15%] lg:mt-[5%] w-[25%] lg:w-[20%] "
          />
        </motion.div>

        <motion.div
          style={{
            y: layer3,
          }}
          className="absolute inset-0 z-20 bottom-0 flex justify-center"
        >
          <Image
            src="/images/Assistant.png"
            alt="assistant-product"
            width={700}
            height={700}
            className="absolute bottom-0 w-[60%] md:w-[45%] "
          />
        </motion.div>
      </div>
    </>
  );
};

export default ParallaxSection;
