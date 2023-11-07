import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export default function Address() {
  const addressRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: addressRef,
    offset: ["end start", "start end"],
  });

  const translateY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(translateY, [0, 0.6, 1], ["0%", "0%", "20%"]);

  return (
    <motion.div
      className="text-xl p-3 font-medium text-shadow-sm"
      ref={addressRef}
      style={{
        y,
      }}
    >
      <div className="flex mb-3">
        <AiOutlinePhone className="w-[30px] h-[30px] mr-2 text-contact-icon" />
        <a href="tel:0123456789">(01) 2345-6789</a>
      </div>
      <div className="flex mb-3">
        <AiOutlineClockCircle className="w-[30px] h-[30px] mr-2 text-contact-icon" />
        <p>
          seg-sab das <time dateTime="09:00:00">9</time>-
          <time dateTime="18:00:00">18h</time>
        </p>
      </div>
      <div className="flex mb-3">
        <AiOutlineEnvironment className="w-[30px] h-[30px] mr-2 text-contact-icon" />
        <p>
          R. Major José Inácio, 2154
          <br /> São Carlos, Brazil
        </p>
      </div>
      <div className="flex mb-6">
        <AiOutlineWhatsApp className="w-[30px] h-[30px] mr-2 text-contact-icon" />
        <a href="tel:0123456789">(01) 2345-6789</a>
      </div>

      <div className="flex ml-[30px]">
        <a href="https://www.facebook.com/" aria-label="facebook">
          <AiFillFacebook className="w-[44px] h-[44px] hover:scale-125 transition-all mr-3" />
        </a>
        <a href="https://www.instagram.com/" aria-label="instagram">
          <AiFillInstagram className="w-[44px] h-[44px] hover:scale-125 transition-all" />
        </a>
      </div>
    </motion.div>
  );
}
