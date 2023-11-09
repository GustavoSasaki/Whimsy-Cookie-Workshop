import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollingText } from "./ScrollingText";


//to-do
//put button to buy in whattsup

export default function ShopImage() {
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
    [0.2, 0.8],
    ["-40vw", "0vw"],
  );

  const xPerfectCookies = useTransform(
    yProgressSpring,
    [0, 0.8],
    ["-120vw", "340vw"],
  );

  const xCoolMusic = useTransform(
    yProgressSpring,
    [0, 0.8],
    ["-200vw", "170vw"],
  );

  const xGoodVibes = useTransform(
    yProgressSpring,
    [0, 0.8],
    ["-120vw", "250vw"],
  );

  const xLast = useTransform(
    yProgressSpring,
    [0, 0.8],
    ["-60vw", "440vw"],
  );

  return (
    <div className="mt-28 mb-32">
      <div className="relative h-[400vh] mx-auto" ref={containerRef}>
        <div className="sticky top-0 rounded-lg h-screen w-screen z-0 overflow-hidden">

          <ScrollingText text={"PERFECT COOKIES"} height={'top-[15vh]'} x={xPerfectCookies} />
          <ScrollingText text={"COOL MUSIC"} height={'top-[50vh]'} x={xCoolMusic} />
          <ScrollingText text={"GOOD VIBES"} height={'top-[75vh]'} x={xGoodVibes} />
          <ScrollingText text={"HAVE A NICE DAY"} height={'top-[90vh]'} x={xLast} />


          <div className="relative h-screen w-[70vw] overflow-hidden mx-auto z-0 ">
            <motion.img
              src={imgShop}
              className="absolute top-[10vh] h-[80vh] w-[110vw] left-0 max-w-none object-cover rounded-lg"
              style={{
                x: xImgs,
              }}
              alt="Whimsy Cookie Workshop Shop"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

const imgShop =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/ruben-ramirez-xhKG01FN2uk-unsplash.jpg";