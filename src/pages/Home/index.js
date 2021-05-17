import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
// import Navbar from "../../components/Navbar";
// import Developers from "../Developers";

function Home() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Header />
      <LoginForm />
      {/* <Developers /> */}
    </div>
  );
}

export default Home;
