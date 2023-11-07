import { useContext } from "react";
import { AboutRefContext, ContactRefContext } from "./NavContextProvider";
import { scrollToPosition } from "./scrollToPosition";

export function Nav() {
  const aboutRef = useContext(AboutRefContext);
  const contactRef = useContext(ContactRefContext);

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
        <a href=".">
          <img
            className=" w-[80px] h-[80px]"
            src={logoImg}
            alt="Whimsy Cookie Workshop"
          ></img>
        </a>
        <a className="hover:text-white">menu</a>
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
  "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/logo2";
