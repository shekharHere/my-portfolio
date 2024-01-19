import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import "./index.scss";
import logo from '../../../src/IG-POST-2.png';

const Layout = () => {
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={logo} alt="logo" />
                    <span className='logo-text'> Porfolio </span>
                </Link>
                <nav>
                    <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/himanshu-shekhar-834169219/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/shekharHere' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://wa.me/919954978361' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Layout;