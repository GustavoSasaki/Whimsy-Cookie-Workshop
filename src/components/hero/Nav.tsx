import { useContext, useState } from "react";
import {
  AboutRefContext,
  ContactRefContext,
  MenuRefContext,
} from "./NavContextProvider";
import { scrollToPosition } from "./scrollToPosition";
import Image from "next/image";
import { MobileNav } from "./MobileNav";

export function Nav() {
  const aboutRef = useContext(AboutRefContext);
  const contactRef = useContext(ContactRefContext);
  const menuRef = useContext(MenuRefContext);

  const [isOpenMobile, setIsOpenMobile] = useState(false)

  return (
    <header>
      <nav className="relative z-50 flex w-full justify-between items-center font-bold text-xl py-4 h-[94px] 
      md:bg-auto">
        <a href="." className="hover:text-white invisible md:visible">
          home
        </a>
        <button
          onClick={(event) => scrollToPosition(aboutRef)}
          className="hover:text-white hidden md:block"
        >
          about
        </button>
        <a href="." className="hover:scale-110 transition-all">
          <Image
            width={80}
            height={80}
            src={logoImg}
            alt="Whimsy Cookie Workshop"
          />
        </a>
        <button
          className="hover:text-white hidden md:block"
          onClick={() => scrollToPosition(menuRef)}
        >
          menu
        </button>
        <button
          onClick={() => scrollToPosition(contactRef)}
          className="hover:text-white hidden md:block"
        >
          contact
        </button>
        <MobileNav isOpen={isOpenMobile}
          setIsOpen={setIsOpenMobile} />
      </nav>
    </header>
  );
}

const logoImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/logo.png";
