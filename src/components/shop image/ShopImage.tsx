import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { IsMobileContext } from "../hero/IsMobileContextProvider";
import { ScrollingText } from "./ScrollingText";
import Image from "next/image";

//to-do
//make a good mobile menu

export default function ShopImage() {
  const isMobile = useContext(IsMobileContext);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end start", "start end"],
  });

  const yProgressSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const xImgs = useTransform(
    yProgressSpring,
    [0.8, 0.2],
    !isMobile ? ["0vw", "-40vw"] : ["0vw", "-30vw"],
  );

  const xPerfectCookies = useTransform(
    yProgressSpring,
    [1, 0.55, 0.05],
    ["100vw", "100vw", "-100vw"],
  );

  const xCoolMusic = useTransform(
    yProgressSpring,
    [1, 0.8, 0.2],
    ["100vw", "100vw", "-100vw"],
  );

  const xGoodVibes = useTransform(
    yProgressSpring,
    [1, 0.35, 0],
    ["100vw", "100vw", "-80vw"],
  );

  return (
    <div className="mt-28 mb-32">
      <div
        className="relative h-[600vh] md:h-[500vh] mx-auto"
        ref={containerRef}
      >
        <div className="sticky top-0 rounded-lg h-screen w-screen z-0 overflow-x-hidden ">
          <ScrollingText
            text={"PERFECT COOKIES"}
            height={"top-[15vh]"}
            x={xPerfectCookies}
          />
          <ScrollingText
            text={"COOL MUSIC"}
            height={"top-[50vh]"}
            x={xCoolMusic}
          />
          <ScrollingText
            text={"GOOD VIBES"}
            height={"top-[75vh]"}
            x={xGoodVibes}
          />

          <div className="relative h-screen  w-screen  md:w-[70vw] overflow-x-hidden mx-auto z-0 ">
            <motion.div
              className="absolute top-[10vh] h-[80vh] w-[130vw] md:w-[110vw] left-0 max-w-none rounded-lg"
              style={{
                x: xImgs,
              }}
            >
              <Image
                src={imgShop}
                alt="Whimsy Cookie Workshop Shop"
                fill={true}
                className="relative object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const imgShop =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/shop";
