import { createContext } from "react";
import { useResizeDetector } from "react-resize-detector";

export const IsMobileContext = createContext<boolean>(false);

export function IsMobileContextProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const { width, ref } = useResizeDetector();
  const isMobile = !!width && width < 768;

  return (
    <div ref={ref} className="w-full">
      <IsMobileContext.Provider value={isMobile}>
        {children}
      </IsMobileContext.Provider>
    </div>
  );
}
