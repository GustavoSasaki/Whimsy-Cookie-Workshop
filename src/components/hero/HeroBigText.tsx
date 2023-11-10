import { MouseParallaxChild } from "react-parallax-mouse";

export function HeroBigText() {
  return (
    <div
      tabIndex={-1}
      id="main-content"
      className="z-20 font-bold  grow self-center flex justify-center flex-col max-w-full"
    >
      <p className="text-[3rem] sm:text-[3rem] md:text-[4rem] ml-6 md:ml-10 mb-4 md:mb-0 block leading-none animate-[goUp_1.2s_1s_both]">
        THE
      </p>

      <MouseParallaxChild factorX={0.15} factorY={0.2}>
        <p className="text-[4.3rem] sm:text-[5rem] md:text-[9rem] text-center  block leading-none animate-[goUp_1.2s_1.2s_both]">
          HANDMAID
        </p>
        <p className="text-[5rem] sm:text-[6rem] md:text-[11rem] mt-4 md:mt-0 text-center  block leading-none animate-[goUp_1.2s_1.4s_both]">
          COOKIES
        </p>
      </MouseParallaxChild>
      <p className="text-[3rem] sm:text-[3rem] md:text-[4rem] text-right mr-6 md:mr-10   mt-4 md:mt-0  block leading-none animate-[goUp_1.2s_1.6s_both]">
        {"OF "}
        <span className="text-[#e6ede4] ">SANCA</span>
      </p>
    </div>
  );
}
