import React, { useState } from "react";
import styles from "../Styles/ContactMe.module.css";
import useForm from "../Hooks/useForm";
import emailjs from "@emailjs/browser";
import FormState from "./FormState";
import Loader from "../Components/Loader";

const ContactMe: React.FC = () => {
  const { inputStates, handleBlur, handleChange, handlePhoneChange, isFilled } =
    useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [sentFormState, setSentFormState] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const templateParams = {
      from_name: inputStates.name,
      from_phone: inputStates.phone,
      email_id: inputStates.mail,
      message: inputStates.mess,
    };
    emailjs
      .send("service_hn6nyp7", "template_t5hxprp", templateParams, {
        publicKey: "A4RvoByML_wz64iwR",
      })
      .then(
        () => {
          setLoading(false);
          setSentFormState(true);
        },
        (error) => {
          setLoading(false);
          setSentFormState(false);
          setErrorMessage(error.text);
        }
      );
  };

  return (
    <div className={styles.contactFormContainer}>
      <h1>
        Let us embark on a long journey <br /> together
      </h1>
      <h2>Any questions or suggestions are more than welcome.</h2>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : sentFormState !== null ? (
        <FormState
          stateType={sentFormState}
          stateMessage={errorMessage || ""}
        />
      ) : (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputGroupContainer1}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="name"
                required
                placeholder=""
                value={inputStates.name}
                onBlur={() => handleBlur("name")}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <label
                htmlFor="name"
                className={`${isFilled("name") ? styles.filled : ""}`}
              >
                Name
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                id="phone"
                required
                placeholder=""
                value={inputStates.phone}
                onBlur={() => handleBlur("phone")}
                onChange={(e) => handlePhoneChange(e.target.value)}
              />
              <label
                htmlFor="phone"
                className={`${isFilled("phone") ? styles.filled : ""}`}
              >
                Phone
              </label>
            </div>
          </div>
          <div className={styles.inputGroupContainer2}>
            <div className={styles.inputGroup21}>
              <input
                type="email"
                id="mail"
                required
                placeholder=""
                value={inputStates.mail}
                onBlur={() => handleBlur("mail")}
                onChange={(e) => handleChange("mail", e.target.value)}
              />
              <label
                htmlFor="mail"
                className={`${isFilled("mail") ? styles.filled : ""}`}
              >
                Email
              </label>
            </div>
            <div className={styles.inputGroup22}>
              <textarea
                id="mess"
                required
                placeholder=""
                value={inputStates.mess}
                onBlur={() => handleBlur("mess")}
                onChange={(e) => handleChange("mess", e.target.value)}
              />
              <label
                htmlFor="mess"
                className={`${isFilled("mess") ? styles.filled : ""}`}
              >
                Message
              </label>
            </div>
          </div>
          <div className={styles.buttonHolder}>
            <button type="submit">SEND</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactMe;
