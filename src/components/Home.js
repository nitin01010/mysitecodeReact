import React from "react";
import { Link } from "react-router-dom";
import './style/Home.css';
import LogoPng from './style/Logo.png';
import LogoPng2 from './style/img.png'

const Home = () => {
    return (
        <>
            <div className="Home">
                <span className="Box">

                    <br /><br />

                    <Link to="/login">
                        <button className="Btn1">Login</button>
                    </Link>
                    <Link to="/signin">
                        <button className="Btn2">Signin</button>
                    </Link>
                </span>
                <span className="Box">
                    <img src={LogoPng} className="LogoHome" alt="Logo" />
                </span>
            </div>
            <br /><hr /><br />
            <section>
                <h1 className="HomeSectionh1">Why Register</h1>
                <div className="HomeSection">
                    <span className="SectionBox">
                        <ul>
                            <ol>1. Read My all Blog ✅ </ol>
                            <ol>2. All My Project ✅ </ol>
                            <ol>3. Free Resouce ✅ </ol>
                            <ol>4. Notes ✅ </ol>
                            <ol>5. ChatWithMe ✅ </ol>
                        </ul>
                    </span>
                    <span className="SectionBox">
                        <img src={LogoPng2} className="LogoSection" alt="" />
                    </span>
                </div>
            </section>
        </>
    )
}

export default Home;