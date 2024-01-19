import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs  from '@emailjs/browser';
import Loader from "react-loaders";
import Layout from "../Sidebar";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rw61al8', // service id
            'template_0xln36r', // template id
            refForm.current, // form reference
            'G9zM-L9QRz4_8g897' // user token -- not required
        )
        .then (
            () => {
                alert('Mail sent successfully!!');
                window.location.reload(); // reloading the page to reset the form
            },
            () => {
                alert('Mail was not send, please try again.');
            }
        )
    }

    return (
        <>
            <Layout/>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '.']} idx={15}/>
                    </h1>
                    <p>
                        Hello there! Excited to connect with you! I'm interested in freelancing opportuniites. Whether you've got burning questions, brilliant collaboration ideas, or just want to say hello, I'm all ears. Drop me a message below, and let's kick off this conversation.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input className="flat-button" type="submit" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Himanshu Shekhar 
                    <br />
                    India 
                    <br />
                    Jaipur, Rajasthan 
                    <br />
                    <span>shekharhimanshu@138gmail.com</span>

                </div>
                <div className="map-wrap">
                    <MapContainer center={[26.9124, 75.7873]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[26.9124, 75.7873]}>
                            <Popup>Himanshu Lives Here..!!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact;