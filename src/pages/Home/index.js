import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
// import Developers from "../Developers";

function Home() {
  return (
    <div className="container">
      <Header />
      <LoginForm />
      {/* <Developers /> */}
    </div>
  );
}

export default Home;
