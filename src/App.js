import React from "react";
// import "./main.sass";
import GlobalNavbar from "./components/GlobalNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BM from "./pages/BM";
import "./App.css";

function App() {
  return (
    <div className="App text-center">
      <GlobalNavbar />
      <Home />
      <BM />

      <Footer />
    </div>
  );
}

export default App;
