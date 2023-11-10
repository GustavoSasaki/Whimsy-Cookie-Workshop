import { IntroductionImgs } from "./IntroductionImgs";
import { ReadMoreButton } from "./ReadMoreButton";

export default function Introduction() {
  return (
    <section className="bg-white text-cookie section-container my-28">
      <h2
        className="uppercase text-6xl text-introduction
             font-bold"
      >
        {"Cookie Bliss, "}
        <p className="text-introduction-light">{"Sweet memories"}</p>
      </h2>

      <div className="flex text-2xl font-medium flex-col lg:flex-row gap-28 lg:gap-8">
        <div
          className="pt-10 max-w-[65ch] "
          style={{
            flex: "1 1 0%",
          }}
        >
          <p className="mb-8">
            Welcome to Whimsy Cookie Workshop, your cozy hideaway for savoring
            artisanal cookies and sharing moments with friends.
            <br className="mb-4" />
            Join us for handcrafted delights and create sweet memories in a
            relaxed, vintage-inspired setting.
          </p>

          <ReadMoreButton />
        </div>

        <IntroductionImgs />
      </div>
    </section>
  );
}
