import ContactMe from "./Contact/ContactMe";
import SiteFooter from "./Components/SiteFooter";
import SiteHeader from "./Components/SiteHeader";

const ContactPage = () => (
  <div className="site-shell contact-page">
    <SiteHeader />
    <main>
      <section className="contact-hero">
        <p className="eyebrow">Contact · New business · Opportunities</p>
        <h1>Good work starts with<br /><em>a real conversation.</em></h1>
        <p>
          Have a working-student role, a product that needs clarity, or an idea worth
          shaping? Tell me where you are and where you want to go.
        </p>
      </section>
      <ContactMe />
    </main>
    <SiteFooter />
  </div>
);

export default ContactPage;
