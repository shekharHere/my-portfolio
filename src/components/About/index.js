import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Layout from "../Sidebar";
import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSalesforce } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    return (
        <>
        <Layout/>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '.']} idx={15}/>
                    </h1>
                    <p>
                        Hey there! I'm your go-to SFCC Developer, navigating the digital realm with finesse. I'm proficient in both front-end and back-end intricacies, with a particular affinity for crafting seamless front-end experiences.
                    </p>
                    <p>
                        My skill set extends to Sales Cloud, React JS, MongoDB, and Node JS, reflecting a comprehensive grasp of modern web development. With a robust portfolio spanning diverse projects, I bring a strategic and analytical approach to every assignment.
                    </p>
                    <p>
                        Beyond the coding realm, I am passionate about expressing creativity through digital art. Additionally, my penchant for crafting short stories allows me to weave narratives that mirror the innovation and storytelling elements essential in my professional endeavors.
                    </p>
                    <p>
                        Join me on a journey where technical expertise converges with creative finesse, resulting in innovative solutions and unparalleled digital experiences.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faSalesforce} color="#00A1E0"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About;