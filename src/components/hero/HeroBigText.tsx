import { MouseParallaxChild } from "react-parallax-mouse";

export function HeroBigText() {
  return (
    <div
      tabIndex={-1}
      id="main-content"
      className="z-20 font-bold  grow self-center flex justify-center flex-col"
    >
      <p className=" text-[4rem] ml-10  block leading-none animate-[goUp_1.2s_1s_both]">
        THE
      </p>

      <MouseParallaxChild factorX={0.15} factorY={0.2}>
        <p className=" text-[9rem] text-center  block leading-none animate-[goUp_1.2s_1.2s_both]">
          HANDMAID
        </p>
        <p className=" text-[11rem] text-center  block leading-none animate-[goUp_1.2s_1.4s_both]">
          COOKIES
        </p>
      </MouseParallaxChild>
      <p className="text-[4rem] text-right mr-10  block leading-none animate-[goUp_1.2s_1.6s_both]">
        {"OF "}
        <span className="text-[#e6ede4] ">SANCA</span>
      </p>
    </div>
  );
}
