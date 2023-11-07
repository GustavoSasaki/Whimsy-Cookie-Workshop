import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { AboutRefContext } from "../hero/NavContextProvider";
import { AboutImgs } from "./AboutImgs";
import ShopImage from "./ShopImage";

export default function About() {

    const aboutRef = useContext(AboutRefContext)

    return (
        <section tabIndex={-1}
            ref={aboutRef} className="bg-white text-cookie section-container my-24">

            <div className="grid text-xl font-medium gap-10"
                style={{
                    gridTemplateColumns: "auto 1fr"
                }}
            >

                <div />
                <h2 className="uppercase text-6xl text-about font-bold">
                    {'About '}
                    <span className="text-about-light">Us</span>
                </h2>

                <AboutImgs />
                <div
                    style={{
                        "flex": "1 1 0%"
                    }}
                >
                    <p className="mb-8">
                        Founded by a group of friends with a shared passion for baking and vintage culture, Whimsy Cookie Workshop has been a labor of love since 2015. From the very first batch of cookies, we aimed to transport our customers to simpler times, where cookies were more than just treats; they were gateways to cherished memories.
                        <br className="mb-4" />
                        As we've grown, our commitment to quality, community, and sustainability has remained unwavering. We proudly source local ingredients, support eco-conscious practices, and aim to be a warm, inviting space for São Carlos and beyond.
                        <br className="mb-4" />
                        Join us at Whimsy Cookie Workshop and be part of our journey, where every cookie is a step back in time and every visit is an opportunity to create sweet memories.
                    </p>
                </div>
            </div>

        </section>
    );
}


const backgroundImg = 'https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/snapbythree-my-g6e641CiHFQ-unsplash.jpg'
const foregroundImg = "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/may-lawrence-3R6g3Iovipk-unsplash.jpg"