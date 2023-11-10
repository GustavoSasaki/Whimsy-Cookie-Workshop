import { createContext, MutableRefObject, useRef } from "react";

export type HtmlRef = MutableRefObject<HTMLDivElement | null> ;

export const AboutRefContext = createContext<HtmlRef | null>(null);
export const HomeRefContext = createContext<HtmlRef | null>(null);
export const MenuRefContext = createContext<HtmlRef | null>(null);
export const ContactRefContext = createContext<HtmlRef | null>(null);

export function NavContextProvider({ children }: { children: JSX.Element[] }) {
  const aboutRef = useRef<HtmlRef>(null) as HtmlRef;
  const hometRef = useRef<HtmlRef>(null) as HtmlRef;
  const menutRef = useRef<HtmlRef>(null) as HtmlRef;
  const contactRef = useRef<HtmlRef>(null) as HtmlRef;

  return (
    <AboutRefContext.Provider value={aboutRef}>
      <HomeRefContext.Provider value={hometRef}>
        <MenuRefContext.Provider value={menutRef}>
          <ContactRefContext.Provider value={contactRef}>
            {children}
          </ContactRefContext.Provider>
        </MenuRefContext.Provider>
      </HomeRefContext.Provider>
    </AboutRefContext.Provider>
  );
}
