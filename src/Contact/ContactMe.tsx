import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { useLanguage } from "../i18n";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactMe = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) return;

    setStatus("sending");

    try {
      await emailjs.send(
        "service_nd6ajqb",
        "template_t5hxprp",
        {
          from_name: formData.get("name"),
          email_id: formData.get("email"),
          from_phone: formData.get("project"),
          message: formData.get("message"),
        },
        { publicKey: "A4RvoByML_wz64iwR" },
      );
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <aside>
        <p className="eyebrow">{t.contact.direct}</p>
        <a className="contact-email" href="mailto:06bisik03@gmail.com">06bisik03@gmail.com</a>
        <div className="contact-details">
          <div><span>{t.contact.basedIn}</span><strong>{t.contact.location}</strong></div>
          <div><span>{t.contact.responseTime}</span><strong>{t.contact.responseValue}</strong></div>
          <div><span>{t.contact.languages}</span><strong>{t.contact.languageValue}</strong></div>
        </div>
      </aside>

      <form onSubmit={handleSubmit}>
        <div className="form-heading">
          <p className="eyebrow">{t.contact.form.eyebrow}</p>
          <h2 id="contact-form-title">{t.contact.form.title}</h2>
        </div>

        <label>
          <span>{t.contact.form.nameLabel}</span>
          <input name="name" type="text" autoComplete="name" placeholder={t.contact.form.namePlaceholder} required />
        </label>

        <label>
          <span>{t.contact.form.emailLabel}</span>
          <input name="email" type="email" autoComplete="email" placeholder={t.contact.form.emailPlaceholder} required />
        </label>

        <label>
          <span>{t.contact.form.projectLabel}</span>
          <select name="project" defaultValue="" required>
            <option value="" disabled>{t.contact.form.selectPlaceholder}</option>
            {t.contact.form.options.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          <span>{t.contact.form.messageLabel}</span>
          <textarea name="message" rows={5} placeholder={t.contact.form.messagePlaceholder} required />
        </label>

        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>

        <div className="form-submit">
          <button className="button button-light" type="submit" disabled={status === "sending"}>
            {status === "sending" ? t.contact.form.sending : t.contact.form.send}<span aria-hidden="true">↗</span>
          </button>
          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {status === "success" && t.contact.form.success}
            {status === "error" && t.contact.form.error}
          </p>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
