import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Footer from "./Contact/Footer";
import FormLink from "./Contact/FormLink";
import { Home } from "./Home/Home";
import { Projects } from "./Projects/Projects";
import { Qualification } from "./Qualification/Qualification";
import MySkills from "./Qualification/MySkills";
import ContactMe from "./Contact/ContactMe";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
