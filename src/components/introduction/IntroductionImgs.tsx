import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

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
    <div className="w-[44vw] max-w-[400px] box-border relative ml-8">
      <div className="overflow-hidden relative top-0  rounded-lg w-8/12 aspect-[6/9] z-40 ">
        <motion.img
          ref={imageRef}
          className="relative top-[-13%] h-[128%] w-full rounded-lg"
          style={{
            y: bakingY,
          }}
          alt="baking cookies"
          src={bakingImg}
        />
      </div>

      <div className="absolute bg-gradient-to-br from-introduction to-introduction-lightest w-5/12 aspect-square -top-10  left-[40%] z-10 rounded-lg" />

      <div className="absolute w-6/12  aspect-[6/9] top-0 bottom-0 my-auto right-0 z-20 overflow-hidden rounded-lg">
        <motion.img
          src={cookieImg}
          className="rounded-lg top-[-11%] h-[124%] w-full relative"
          alt="cookies"
          style={{
            y: cookieY,
          }}
        />
      </div>
    </div>
  );
}

const cookieImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/arvid-skywalker-aGhS-JQMB_g-unsplash.jpg";
const bakingImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/image.jpg";
