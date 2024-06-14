import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Qualification from "./Qualification/Qualification";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        {/* <Home />
        <Qualification /> */}
        <Projects/>
      </div>
    </div>
  );
}

export default App;
