import { Inter } from "next/font/google";
import Contact from "@/components/contact/Contact";
import Introduction from "@/components/introduction/Introduction";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import { NavContextProvider } from "@/components/hero/NavContextProvider";
import ShopImage from "@/components/shop image/ShopImage";
import { Menu } from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-full">
      <NavContextProvider>
        <Hero />
        <Introduction />
        <Menu />
        <About />
        <Contact />
        <ShopImage />
      </NavContextProvider>
      <Footer />
    </main>
  );
}
