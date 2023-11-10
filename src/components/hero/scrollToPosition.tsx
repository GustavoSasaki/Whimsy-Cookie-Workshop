import { getPrefersReducedMotion } from "./getPrefersReducedMotion";
import { HtmlRef } from "./NavContextProvider";

export const scrollToPosition = (ref: HtmlRef | null) => {
  if (!ref?.current) return;

  const reduceMotion = getPrefersReducedMotion();
  ref.current.scrollIntoView({
    behavior: !reduceMotion ? "smooth" : undefined,
  });

  ref.current.focus({ preventScroll: true });
};
