import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function MenuItemImg({name, img}:{name:string;img:string}) {

    const addressRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: addressRef,
        offset: ["end start", "start end"],
    });


    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.40, 0.60, 0.8, 1], ["0.7", "0.90", "1", "1", "0.90", "0.7"]);
    const grayScale = useTransform(scrollYProgress, [0, 0.3, 0.40, 0.60, 0.7, 1], ["0.9", "0.35", "0", "0", "0.35", "0.9"]);
    const filter = useTransform(grayScale, scale => `grayscale(${scale})`);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.40, 0.60, 0.7, 1], ["0.7", "0.9", "1.4", "1.4", "0.9", "0.7"]);

    return (
        <motion.img ref={addressRef}
            style={{ opacity, filter, scale }}
            alt={name}
            src={img} className="absolute top-[60px] bottom-0 right-0 left-0 w-[150px] aspect-[8/10] object-cover m-auto rounded-md" />
    )
}