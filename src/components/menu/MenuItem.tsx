import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export interface Recipe {
    name: string
    description: string
    price: string
    img?: string
}

export function MenuItem({ name, description, price, img }: Recipe) {

    const addressRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: addressRef,
        offset: ["end start", "start end"],
    });


    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.40, 0.60, 0.8, 1], ["0.7", "0.90", "1", "1", "0.90", "0.7"]);
    const x = useTransform(scrollYProgress, [0, 0.3, 0.40, 0.60, 0.7, 1], ["0px", "-15px", "-50px", "-50px", "-15px", "0px"]);
    const grayScale = useTransform(scrollYProgress, [0, 0.3, 0.40, 0.60, 0.7, 1], ["0.9", "0.35", "0", "0", "0.35", "0.9"]);
    const filter = useTransform(grayScale, scale => `grayscale(${scale})`);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.40, 0.60, 0.7, 1], ["0.7", "0.9", "1.4", "1.4", "0.9", "0.7"]);

    return (
        <div className={`flex gap-8  justify-between my-3 items-start py-4`}>

            <div className="grow">
                <div className="flex flex-row justify-between text-2xl text-cookie-dark max-w-[650px]">
                    <p className="font-medium ">{name}</p>
                    <div className="grow mx-[13px] h-full mt-5"
                        style={{
                            borderColor: 'rgba(47 32 19,0.72)',
                            borderTop: '1px #000',
                            borderLeft: '1px #000',
                            borderRight: '5px #000',
                            borderBottom: "4px dotted",
                        }}
                    />
                    <p className="text-xl"><span className="pr-1">R$</span>{price}</p>
                </div>
                <p className="font-normal max-w-[40ch]">{description}</p>
            </div>
            <div className="w-[195px] relative">
                {img &&
                <motion.img ref={addressRef}
                    style={{ opacity, filter, scale }}
                    alt={name}
                    src={img} className="absolute top-[60px] bottom-0 right-0 left-0 w-[150px] aspect-[8/10] object-cover m-auto rounded-md" />
                }
            </div>
        </div>
    )
}