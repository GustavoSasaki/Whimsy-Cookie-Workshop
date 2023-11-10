import { motion, MotionValue } from "framer-motion";

export function ScrollingText({ text, height, x }: { text: string, height: string, x: MotionValue<string> }) {

    return (
        <div className={`absolute ${height} text-7xl uppercase text-center text-cookie-dark`}>
            <motion.p
                className="absolute -z-40  whitespace-nowrap"
                style={{
                    x,
                }}
            >{text}</motion.p>

            <motion.p
                id="text-front-shop"
                className="absolute z-40 text-stroke-white sm:text-stroke-cookie whitespace-nowrap  text-white sm:text-transparent
                sm:text-shadow-none text-shadow-lg
                "
                style={{
                    x,
                }}
            >{text}</motion.p>
        </div>
    )
}
