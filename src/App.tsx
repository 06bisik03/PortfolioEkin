import React, { useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
