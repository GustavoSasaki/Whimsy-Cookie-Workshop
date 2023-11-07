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
    >
      <div className="div section-container">
        <h2 className="uppercase text-6xl font-bold text-shadow ">
          Contact us
        </h2>
        <address className="flex mt-10">
          <div className="grow">
            <Address />
          </div>

          <ContactMap />
        </address>
      </div>
    </section>
  );
}
