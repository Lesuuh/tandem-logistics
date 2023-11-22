import { Background } from "../components/Background";
import { ContactBanner } from "../components/ContactBanner";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";

export const Contact = () => {
  const text = "Contact";
  return (
    <div>
      <Header text={text} />
      {/* <Background/> */}
      <ContactBanner/>
      <ContactForm/>
    </div>
  );
};
