import styles from "./App.module.css";
import React from "react";
import Footer from "./Contact/Footer";
import ContactMe from "./Contact/ContactMe";
import Navbar from "./Components/Navbar";
import { useNavigate} from "react-router";

const ContactPage: React.FC = () => {
    const navigate = useNavigate();
    const scrollFromContacts = (section: string) => {
        navigate(`/?scrollTo=${section}`)
    }
  return (
    <>
      <div className={styles.appContainer}>
        <Navbar scrollToRef={scrollFromContacts}/>
        <div className={styles.contentContainer}>
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
