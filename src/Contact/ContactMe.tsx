import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactMe = () => {
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
        <p className="eyebrow">Direct</p>
        <a className="contact-email" href="mailto:06bisik03@gmail.com">06bisik03@gmail.com</a>
        <div className="contact-details">
          <div><span>Based in</span><strong>Aachen, Germany</strong></div>
          <div><span>Response time</span><strong>Usually within 48 hours</strong></div>
          <div><span>Languages</span><strong>English · German · Turkish</strong></div>
        </div>
      </aside>

      <form onSubmit={handleSubmit}>
        <div className="form-heading">
          <p className="eyebrow">Send a note</p>
          <h2 id="contact-form-title">What can we create together?</h2>
        </div>

        <label>
          <span>01 · Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Name" required />
        </label>

        <label>
          <span>02 · Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>

        <label>
          <span>03 · I’m reaching out about</span>
          <select name="project" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="Working-student opportunity">A working-student opportunity</option>
            <option value="Full-time role">A full-time role</option>
            <option value="Freelance project">A freelance project</option>
            <option value="Collaboration">A collaboration</option>
            <option value="Something else">Something else</option>
          </select>
        </label>

        <label>
          <span>04 · Tell me a little more</span>
          <textarea name="message" rows={5} placeholder="A few words about the role, project, or idea…" required />
        </label>

        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>

        <div className="form-submit">
          <button className="button button-light" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}<span aria-hidden="true">↗</span>
          </button>
          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {status === "success" && "Thank you — your message is on its way."}
            {status === "error" && "Something went wrong. Please email me directly instead."}
          </p>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
