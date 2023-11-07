import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function AboutImgs() {
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

  const foregroundY = useTransform(translateY, [0.2, 0.8], ["12%", "-12%"]);

  const backgroundY = useTransform(translateY, [0.2, 0.8], ["-10%", "10%"]);

  return (
    <div className="w-[30vw] box-border relative ml-8 -mt-[1vw]">
      <div className="overflow-hidden relative top-0  ml-auto rounded-lg w-8/12 aspect-[6/9] z-40  mb-[16vw]">
        <motion.img
          ref={imageRef}
          className="relative top-[-13%] h-[128%] w-full rounded-lg"
          style={{
            y: foregroundY,
          }}
          src={foregroundImg}
          alt="cookies"
        />
      </div>

      <div className="absolute bg-gradient-to-br from-about-lighter to-about w-5/12 aspect-square top-[28vw]  left-[40%] z-10 rounded-lg" />

      <div className="absolute w-6/12  aspect-[6/9] top-[14vw] bottom-0 left-0 z-20 overflow-hidden rounded-lg">
        <motion.img
          src={backgroundImg}
          className="rounded-lg top-[-11%] h-[124%] w-full relative"
          style={{
            y: backgroundY,
          }}
          alt="cofee"
        />
      </div>
    </div>
  );
}

const backgroundImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/snapbythree-my-g6e641CiHFQ-unsplash.jpg";
const foregroundImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/may-lawrence-3R6g3Iovipk-unsplash.jpg";
