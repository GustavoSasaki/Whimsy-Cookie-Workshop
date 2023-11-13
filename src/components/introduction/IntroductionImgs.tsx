import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'

export function IntroductionImgs() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["end start", "start end"],
  });

  const translateY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const bakingY = useTransform(translateY, [0.2, 0.8], ["-12%", "12%"]);
  const cookieY = useTransform(translateY, [0.2, 0.8], ["10%", "-10%"]);

  return (
    <div className=" w-[80vw] max-w-[500px] mx-auto lg:w-[44vw] lg:max-w-[400px] box-border relative">
      <div
        className="overflow-hidden relative top-0  rounded-lg w-8/12 aspect-[7/9] lg:aspect-[6/9] z-40 lg:mx-0
      mx-auto -left-[16%] md:left-auto
      "
      >
        <motion.div
          ref={imageRef}
          className="relative top-[-13%] h-[128%] w-full rounded-lg"
          style={{
            y: bakingY,
          }}
        >
          <Image
            className="relative"
            fill={true}
            src={bakingImg}
            alt="baking cookies"
          />
        </motion.div>
      </div>

      <div
        className="absolute bg-gradient-to-tl md:bg-gradient-to-tr lg:bg-gradient-to-br from-introduction to-introduction-lightest w-5/12 aspect-square 
      md:top-[60%] md:left-[5%] lg:-top-[10%]  lg:left-[40%] z-10 rounded-lg
      top-[70%] left-[45%]
      "
      />

      <div
        className="absolute w-6/12  aspect-[6/9] -top-1/3 lg:top-0 bottom-0 my-auto right-0 z-20 overflow-hidden rounded-lg
          md:left-[60%] lg:left-auto left-[50%]
        "
      >
        <motion.div
          className="rounded-lg top-[-11%] h-[124%] w-full relative"
          style={{
            y: cookieY,
          }}
        >
          <Image
            className="relative"
            fill={true}
            src={cookieImg}
            alt="cookies"
          />

        </motion.div>
      </div>
    </div>
  );
}

const cookieImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/introductionCookie.jpg";
const bakingImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/baking";
