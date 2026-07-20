import ContactMe from "./Contact/ContactMe";
import SiteFooter from "./Components/SiteFooter";
import SiteHeader from "./Components/SiteHeader";
import { useLanguage } from "./i18n";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="site-shell contact-page">
      <SiteHeader />
      <main>
        <section className="contact-hero">
          <p className="eyebrow">{t.contact.hero.eyebrow}</p>
          <h1>{t.contact.hero.titleLead}<br /><em>{t.contact.hero.titleAccent}</em></h1>
          <p>{t.contact.hero.description}</p>
        </section>
        <ContactMe />
      </main>
      <SiteFooter />
    </div>
  );
};

export default ContactPage;
