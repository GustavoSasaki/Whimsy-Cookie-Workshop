import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { AboutRefContext } from "../hero/NavContextProvider";
import { AboutImgs } from "./AboutImgs";

export default function About() {
  const aboutRef = useContext(AboutRefContext);

  return (
    <section
      tabIndex={-1}
      ref={aboutRef}
      className="bg-white text-cookie section-container my-24"
    >
      <div
      id="about-grid"
        className="grid text-xl font-medium gap-10 "
      >

        <h2 className="uppercase text-6xl text-about font-bold [grid-area:title]">
          {"About "}
          <span className="text-about-light">Us</span>
        </h2>

        <AboutImgs />
        <div
          style={{
            gridArea:"text",
            flex: "1 1 0%",
          }}
        >
          <p className="mb-8">
            Founded by a group of friends with a shared passion for baking and
            vintage culture, Whimsy Cookie Workshop has been a labor of love
            since 2015. From the very first batch of cookies, we aimed to
            transport our customers to simpler times, where cookies were more
            than just treats; they were gateways to cherished memories.
            <br className="mb-4" />
            As we&apos;ve grown, our commitment to quality, community, and
            sustainability has remained unwavering. We proudly source local
            ingredients, support eco-conscious practices, and aim to be a warm,
            inviting space for São Carlos and beyond.
            <br className="mb-4" />
            Join us at Whimsy Cookie Workshop and be part of our journey, where
            every cookie is a step back in time and every visit is an
            opportunity to create sweet memories.
          </p>
        </div>
      </div>
    </section>
  );
}