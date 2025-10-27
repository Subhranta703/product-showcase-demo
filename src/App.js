import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
