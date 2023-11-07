export function BuyNowButton() {
  return (
    <div className="group mx-auto relative  w-[fit-content] mb-4 animate-[goUp_2s_3s_both]">
      <button className="relative text-2xl bg-gradient-to-bl from-red-400 to-red-500 text-white mx-auto rounded-lg p-2 z-20">
        Buy Now
      </button>

      <div className="absolute inset-0 bg-gradient-to-bl from-red-400 to-red-500 blur-md group-hover:blur-sm transition-all z-10 rounded-xl animate-tilt p-2 opacity-50 group-hover:opacity-100"></div>
    </div>
  );
}
