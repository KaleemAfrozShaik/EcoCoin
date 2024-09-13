
import React from 'react';
import './Footer.css'
import { FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = (props) => {
    return (
    <>
        <h1 className='heading'>GET CONNECTED WITH US</h1>
        <div className="links">
            <a href="/" className="link"><FaLinkedin /></a>
            <a href="/" className="link"><FaFacebook /></a>
            <a href="/" className="link"><BsTwitterX /></a>
            <a href="/" className="link"><FaInstagram /></a>
        </div>
        <hr className="line" />
        <div className="container">
            <div className="box1 box">
                <h2 className="subheading">Company</h2>
                <a href="/" className="link">About EcoCoin</a>
                <a href="/" className="link">Awards</a>
                <a href="/" className="link">Contact US</a>
            </div>
            <div className="box2 box">
                <h2 className="subheading">News & Events</h2>
                <a href="/" className="link">News</a>
                <a href="/" className="link">Events</a>
            </div>
            <div className="box3 box">
                <h2 className="subheading">Customer Stories</h2>
                <a href="/" className="link">Customer Stories</a>
            </div>
            <div className="box4">
                <form action="" className="footerForm">
                    <input type="email" placeholder='Enter your E-mail Address' className='email-ipt'/>
                    <button className='submit-btn'>SUBMIT</button>
                    <p className="txt">SignUp to receive EcoCoin Marketing mails.You can modify your subscription or unsubscribe at any time <br/><br/>21076 BakeParkway. Suite106. LakeForest. CA92630</p>
                </form>
            </div>
        </div> 
        <div className="links2">
        <a href="/" className="link2">Web Policy</a>
        <span>|</span>
        <a href="/" className="link2">Cookies Policy</a>
        </div>
        <div className="lastline">
            <p>@2024 EcoCoin. All Rights Reserved</p>
            <div class="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.mode === 'dark'} onChange={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Switch to ${props.mode==='light'?'Dark':'Light'} Mode`}</label>
            </div>
        </div>
    </>
    )
}

export default Footer