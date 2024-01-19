import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
// import LogoTitle from "../../assets/images/logo-s.png";
import Logo from "./Logo";
import "./index.scss";
import Layout from "../Sidebar";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [" ", "a", " " ];
  const desiganationArray = [ "S", "F", "C", "C" ];
  const jobArray = ["d", "e", "v", "e", "l", "o", "p", "e", "r", "." ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
    <Layout/>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={desiganationArray}
              idx={18}
              isDesignation
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript  / SalesForce Certified</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home;
