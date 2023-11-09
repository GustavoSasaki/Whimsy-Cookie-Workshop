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
                className="absolute z-40  whitespace-nowrap"
                style={{
                    x,
                    '-webkit-text-stroke': '2px #2f2013',
                    'color': 'rgba(51, 51, 51, 0)',
                }}
            >{text}</motion.p>
        </div>
    )
}
