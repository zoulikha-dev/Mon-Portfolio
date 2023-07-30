import React from "react";
import "../styles/components/home.scss";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="background-container">
      <div className="typewriter-container">
        <h1>
          <Typewriter
            options={{
              strings: "Je suis Zoulikha EL HADRI",
              autoStart: true,
            }}
          ></Typewriter>
        </h1>
        <h2>
          <Typewriter
            options={{
              strings: "Développeuse Web",
              autoStart: true,
              loop: true,
            }}
          ></Typewriter>
        </h2>
      </div>
    </div>
  );
};

export default Home;
