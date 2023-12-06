import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useContext, useEffect, useState } from "react";
import { AboutRefContext, ContactRefContext, HtmlRef, MenuRefContext } from "./NavContextProvider";
import { scrollToPosition } from "./scrollToPosition";
import { Squash as Hamburger } from 'hamburger-react'

export function MobileNav({ isOpen, setIsOpen }:
  { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) {
  const aboutRef = useContext(AboutRefContext);
  const contactRef = useContext(ContactRefContext);
  const menuRef = useContext(MenuRefContext);

  let [goSection, setGoSection] = useState<HtmlRef | null>(null)


  function handleClick(sectionRef: HtmlRef | null) {
    if (!sectionRef) return
    setIsOpen(false)
    setGoSection(sectionRef)
  }

  useEffect(() => {
    if (!goSection) return

    const intervalID = setInterval(() => {
      scrollToPosition(goSection)
      setGoSection(null)
    }, 750);

    return () => clearInterval(intervalID);
  }, [goSection])
  return (
    <>

      <div className="block md:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} aria-label="open navigation" />
      </div>


      <Transition.Root
        show={isOpen}
        as={Fragment}
      >
        <Dialog onClose={setIsOpen} >
          <Transition.Child
            enter="transform transition ease-in-out duration-500"
            enterFrom="-translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transform transition ease-in-out duration-500"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-full opacity-0"
            className={`fixed inset-0 z-40 text-white shadow-xl`}
          >
            <Dialog.Panel className="relative pt-[94px] w-screen bg-[#201c22]">
              <div className="flex items-center gap-4 flex-col shadow-xl pt-6 pb-10 font-medium text-3xl capitalize">

                <a href="." >
                  home
                </a>
                <button
                  onClick={() => handleClick(aboutRef)}
                >
                  About
                </button>
                <button
                  onClick={() => handleClick(menuRef)}
                >
                  Menu
                </button>
                <button
                  onClick={() => handleClick(contactRef)}
                >
                  Contact
                </button>
              </div>
            </Dialog.Panel>

          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
