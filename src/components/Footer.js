import React from "react";
import './style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (<>
        <h2 className="FooterSection">Footer</h2>
        <div className="Footer">
            <span className="FooterBox">
                <ul>
                    <li><ion-icon name="home-outline"></ion-icon><Link className="FooterLinks" to="/">Home</Link></li>
                    <li><ion-icon name="log-in-outline"></ion-icon><Link className="FooterLinks" to="/signin">Signin</Link></li>
                    <li><ion-icon name="person-outline"></ion-icon><Link className="FooterLinks" to="/login">Login</Link></li>
                </ul>
            </span>
            <span className="FooterBox">
                <ul>

                    <li><ion-icon name="logo-linkedin"></ion-icon><a href="https://www.linkedin.com/in/nitin0202/" className="FooterLinks" target="_blanck">Linkdin</a></li>
                    <li><ion-icon name="logo-instagram"></ion-icon><a href="https://www.instagram.com/nitin.0202/" target="_blanck" className="FooterLinks">Instagram</a></li>
                    <li><ion-icon name="logo-youtube"></ion-icon><a href="https://www.youtube.com/" target="_blanck" className="FooterLinks">Youtube</a></li>
                </ul>
            </span>
            <span className="FooterBox">
                <ul>
                    <li><ion-icon name="reader-outline"></ion-icon><Link className="FooterLinks" to="/">Blog</Link></li>
                    <li><ion-icon name="grid-outline"></ion-icon><Link className="FooterLinks" to="/">Group Joind</Link></li>
                    <li><ion-icon name="information-circle-outline"></ion-icon><Link className="FooterLinks" to="/">Help us</Link></li>
                </ul>
            </span>
        </div>
    </>)
}
export default Footer;