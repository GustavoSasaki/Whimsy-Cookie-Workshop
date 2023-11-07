import { createContext, MutableRefObject, useRef } from "react";

export type HtmlRef = MutableRefObject<HTMLDivElement> | null

export const AboutRefContext = createContext<HtmlRef>(null)
export const HomeRefContext = createContext<HtmlRef>(null)
export const MenuRefContext = createContext<HtmlRef>(null)
export const ContactRefContext = createContext<HtmlRef>(null)


export function NavContextProvider({ children }: { children: JSX.Element[] }) {
    const aboutRef = useRef<HtmlRef>(null)
    const hometRef = useRef<HtmlRef>(null)
    const menutRef = useRef<HtmlRef>(null)
    const contactRef = useRef<HtmlRef>(null)

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
    )
}