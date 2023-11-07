import { getPrefersReducedMotion } from "./getPrefersReducedMotion";
import { HtmlRef } from "./NavContextProvider";

export const scrollToPosition = (ref: HtmlRef) => {
  if (!ref?.current) return;

  const reduceMotion = getPrefersReducedMotion();
  ref.current.scrollIntoView({
    behavior:
      !reduceMotion && ref.current.offsetTop < 6000 ? "smooth" : undefined,
  });

  ref.current.focus({ preventScroll: true });
};
