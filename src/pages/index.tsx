import { Inter } from "next/font/google";
import Contact from "@/components/contact/Contact";
import Introduction from "@/components/introduction/Introduction";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import { NavContextProvider } from "@/components/hero/NavContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-full">
      <NavContextProvider>
        <Hero />
        <Introduction />
        <div className="h-[300px] bg-[#e0cc82]"></div>
        <About />
        <Contact />
      </NavContextProvider>
      <Footer />
    </main>
  );
}
