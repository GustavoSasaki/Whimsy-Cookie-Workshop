import { useRef } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { BuyNowButton } from "./BuyNowButton";
import { HeroBigText } from "./HeroBigText";
import { Nav } from "./Nav";
import { SkipNav } from "./SkipNav";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bigCookieRef = useRef<HTMLImageElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`hero-height bg-gradient-to-bl from-hero to-hero-dark text-hero-typograph relative w-full`}
      style={{ boxShadow: "0px 10px 10px rgb(var(--color-hero-dark)/0.5)" }}
      aria-label="Whimsy Cookie Workshop"
    >
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <SkipNav />
        <div className="md:gu-container  hero-height flex flex-col pt-2 z-10 relative">
          <Nav />
          <HeroBigText />
          <BuyNowButton />
        </div>

        <div className=" w-80 h-80 top-0 bottom-0 m-auto left-0 right-0 absolute z-20 animate-[goUpCookie_1.2s_2.5s_both]">
          <MouseParallaxChild
            factorX={0.5}
            factorY={0.6}
            className="h:full w-full grid place-content-center"
          >
            <img
              ref={bigCookieRef}
              className="mx-auto w-3/4 md:w-full aspect-square hover:opacity-20 transition duration-700 "
              src={cookieImg}
              alt=""
            />
          </MouseParallaxChild>
        </div>

        <div className="absolute left-0 top-0 z-10 w-[25%] h-full pointer-events-none animate-[goDown_0.8s_0.1s_both]">
          <Image fill={true} src={dotsImg} alt="" />
        </div>
        <div className="absolute right-0 top-0 z-10 w-[25%] h-full pointer-events-none animate-[goDown_0.8s_0.1s_both]">
          <Image fill={true} src={dotsImg} alt="" />
        </div>
      </MouseParallaxContainer>
    </section>
  );
}

const dotsImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/dots-left.png";
const cookieImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/hero.png";
