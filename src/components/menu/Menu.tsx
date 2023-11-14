import { useContext } from "react";
import { MenuRefContext } from "../hero/NavContextProvider";
import { MenuCategory } from "./MenuCategory";
import { MenuItem, Recipe } from "./MenuItem";

export function Menu() {
  const menuRef = useContext(MenuRefContext);

  return (
    <section
      className="from-[#e0cc82] bg-gradient-to-bl to-green-600 py-28 text-cookie"
      style={{
        boxShadow: "0px 10px 10px rgb(22 163 74/0.5)",
      }}
      aria-labelledby="menu-title"
    >
      <div tabIndex={-1} ref={menuRef} className="menu-container max-w-[900px]">
        <h2
          id="menu-title"
          className="uppercase text-6xl font-bold text-shadow text-white pb-5"
        >
          The Menu
        </h2>
        <div className="bg-white h-full rounded-lg p-12 flex flex-col gap-20">
          <MenuCategory title={"cookies"} underscoreColor="bg-amber-500">
            {cookieRecepis.map((r) => (
              <MenuItem {...r} key={r.name} />
            ))}
          </MenuCategory>

          <MenuCategory title={"beverages"} underscoreColor="bg-orange-500">
            {beverageRecepis.map((r) => (
              <MenuItem {...r} key={r.name} />
            ))}
          </MenuCategory>
        </div>
      </div>

      <div className="group mx-auto relative  w-[fit-content] mt-11  hover:scale-105 transition-all">
        <a
          href="https://www.whatsapp.com/?lang=pt_BR"
          className="relative text-3xl bg-gradient-to-bl from-red-400 to-red-500 text-white mx-auto rounded-2xl p-4 z-20"
        >
          Order Online
        </a>

        <div className="absolute inset-0 bg-gradient-to-bl from-red-400 to-red-500 blur-md group-hover:blur-0 transition-all z-10 rounded-2xl animate-tilt p-4 opacity-50 group-hover:opacity-100"></div>
      </div>
    </section>
  );
}

const cookieRecepis: Recipe[] = [
  {
    name: "Lavender Dream Cookie",
    description:
      "freshly grated lemon zest, fragrant dried lavender buds, pure vanilla extract",
    price: "5,00",
  },
  {
    name: "Chai Spice Cookie",
    price: "5,00",
    img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/chaiCookie",
    description:
      "finely ground chai tea blend, aromatic ground cinnamon, ground cardamom, ground ginger, unsalted butter, granulated sugar, all-purpose flour",
  },
  {
    name: "Triple Chocolate Avalanche Cookie",
    description:
      "dark chocolate chunks, creamy milk chocolate chips, velvety white chocolate chips, premium cocoa powder, unsalted butter, all-purpose flour.",
    price: "6,00",
  },
  {
    name: "Matcha White Zen Cookie",
    price: "6,00",
    img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/cookieMatcha.jpg",
    description:
      "vibrant matcha green tea powder, creamy white chocolate chips, unsalted butter, granulated sugar, all-purpose flour",
  },
];

const beverageRecepis: Recipe[] = [
  {
    name: "Minty Fresh Infused Water",
    price: "3,00",
    description:
      "Purified water infused with fresh mint leaves, cucumber slices, and a hint of zesty lemon.",
  },
  {
    name: "Berry Hibiscus Iced Tea",
    price: "12,00",
    description:
      "A vibrant hibiscus herbal tea served over ice, infused with a medley of ripe mixed berries and a hint of citrus.",
    img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/tea.jpg",
  },
  {
    name: "Espresso Elegance",
    price: "10,00",
    description:
      "A shot of rich espresso made from freshly ground beans, crowned with a dollop of velvety steamed milk and a sprinkle of cocoa powder.",
  },
];
