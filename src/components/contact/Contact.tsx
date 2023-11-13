import { useContext } from "react";
import { ContactRefContext } from "../hero/NavContextProvider";
import Address from "./Address";
import ContactMap from "./ContactMap";

export default function Contact() {
  const contactRef = useContext(ContactRefContext);

  return (
    <section
      tabIndex={-1}
      ref={contactRef}
      className="bg-gradient-to-br from-contact to-contact-light text-white py-20"
      style={{
        boxShadow: "0px 10px 10px rgb(var(--color-contact-light)/0.5)",
      }}
      aria-labelledby="contact-title"
    >
      <div className="div section-container">
        <h2
          id="contact-title"
          className="uppercase text-6xl font-bold text-shadow "
        >
          Contact us
        </h2>
        <address className="flex mt-10 flex-col-reverse md:flex-row gap-5 md:gap-0">
          <div className="grow">
            <Address />
          </div>

          <ContactMap />
        </address>
      </div>
    </section>
  );
}
