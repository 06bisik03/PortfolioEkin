import React, { useRef, useEffect } from "react";
import "../Styles/FormState.css";

interface FormStateProps {
  stateType: boolean;
  stateMessage: string | null;
}

interface ErrorStateProp {
  message: string | null;
}

const FormState: React.FC<FormStateProps> = ({ stateType, stateMessage }) => {
  return stateType === true ? (
    <SuccessMark />
  ) : (
    <ErrorMark message={stateMessage} />
  );
};

export default FormState;

const ErrorMark: React.FC<ErrorStateProp> = ({ message }) => {
  return (
    <div className="wrapper">
      <div className="mark_wrapper">
        <svg
          className="checkmark error"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark_circle_error"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark_check"
            strokeLinecap="round"
            fill="none"
            d="M16 16 36 36 M36 16 16 36"
          />
        </svg>
      </div>
      <h2>
        There has been an error while sending the email.<br />
        Error: {message}
      </h2>
    </div>
  );
};

const SuccessMark: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="mark_wrapper">
        <svg
          className="checkmark success"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark_circle_success"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark_check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2>Your message has been sent successfully. Please check your email.</h2>
    </div>
  );
};
