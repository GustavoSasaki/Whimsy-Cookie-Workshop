import { useScroll, useTransform, motion } from "framer-motion";
import { useContext, useRef } from "react";
import { IsMobileContext } from "../hero/IsMobileContextProvider";
import Image from 'next/image'

export function MenuItemImg({ name, img }: { name: string; img: string }) {
  const isMobile = useContext(IsMobileContext);

  const addressRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: addressRef,
    offset: ["end start", "start end"],
  });

  const scaleRange = isMobile ? { input: [1], output: [1] } : scaleRangesPc;

  const grayScaleRange = isMobile ? grayScaleRangeMobile : grayScaleRangePc;

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0.7", "0.90", "1", "1", "0.90", "0.7"],
  );
  const grayScale = useTransform(
    scrollYProgress,
    grayScaleRange.input,
    grayScaleRange.output,
  );
  const filter = useTransform(grayScale, (scale) => `grayscale(${scale})`);
  const scale = useTransform(
    scrollYProgress,
    scaleRange.input,
    scaleRange.output,
  );

  return (
    <motion.div
      ref={addressRef}
      style={{ opacity, filter, scale }}
      className=" my-4  md:my-0 md:absolute top-[100px] md:-top-[50px] bottom-0 right-0 left-0 w-[min(200px,60%)] md:max-w-none md:w-[150px] aspect-square md:aspect-[8/10] object-cover m-auto rounded-md mb-3 md:mb-0"
    >
      <Image
        alt={name}
        src={img}
        className="relative"
        fill={true}
      />
    </motion.div>
  );
}

const scaleRangesPc = {
  input: [0, 0.3, 0.4, 0.6, 0.7, 1],
  output: [0.7, 0.9, 1.4, 1.4, 0.9, 0.7],
};

const grayScaleRangePc = {
  input: [0, 0.3, 0.4, 0.6, 0.7, 1],
  output: [0.9, 0.35, 0, 0, 0.35, 0.9],
};

const grayScaleRangeMobile = {
  input: [0, 0.3, 0.4, 0.6, 0.7, 1],
  output: [0.35, 0.15, 0, 0, 0.15, 0.35],
};
