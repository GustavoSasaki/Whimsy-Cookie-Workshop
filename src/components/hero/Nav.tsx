import { useContext } from "react";
import {
  AboutRefContext,
  ContactRefContext,
  MenuRefContext,
} from "./NavContextProvider";
import { scrollToPosition } from "./scrollToPosition";

export function Nav() {
  const aboutRef = useContext(AboutRefContext);
  const contactRef = useContext(ContactRefContext);
  const menuRef = useContext(MenuRefContext);

  return (
    <header>
      <nav className="flex w-full justify-between items-center font-bold text-xl">
        <a href="." className="hover:text-white">
          home
        </a>
        <button
          onClick={(event) => scrollToPosition(aboutRef)}
          className="hover:text-white"
        >
          about
        </button>
        <a href="." className="hover:scale-110 transition-all">
          <img
            className=" w-[80px] h-[80px]"
            src={logoImg}
            alt="Whimsy Cookie Workshop"
          ></img>
        </a>
        <button
          className="hover:text-white"
          onClick={() => scrollToPosition(menuRef)}
        >
          menu
        </button>
        <button
          onClick={() => scrollToPosition(contactRef)}
          className="hover:text-white"
        >
          contact
        </button>
      </nav>
    </header>
  );
}

const logoImg =
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/logo.png";
