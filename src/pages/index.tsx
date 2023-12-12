import { Inter } from "next/font/google";
import Contact from "@/components/contact/Contact";
import Introduction from "@/components/introduction/Introduction";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import { NavContextProvider } from "@/components/hero/NavContextProvider";
import ShopImage from "@/components/shop image/ShopImage";
import { Menu } from "@/components/menu/Menu";
import { IsMobileContextProvider } from "@/components/hero/IsMobileContextProvider";
import { JustChill } from "@/components/just chill/JustChill";
import { HeadBox } from "@/components/HeadBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-full">
      <HeadBox />
      <IsMobileContextProvider>
        <NavContextProvider>
          <Hero />
          <Introduction />
          <Menu />
          <About />
          <Contact />
          <ShopImage />
          <JustChill />
        </NavContextProvider>
      </IsMobileContextProvider>
      <Footer />
    </main>
  );
}
