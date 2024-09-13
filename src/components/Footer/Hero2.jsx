import React from 'react';
import './Hero2.css';
import image1 from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/image1.jpg';
import image2 from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/image2.jpg';
import image3 from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/image3.jpg';

const Hero2 = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-card" id="individuals">
                    <img src={image1} alt="Individuals"/>
                    <div className="hero-text">
                        <h1>INDIVIDUALS</h1>
                        <p>Become a Tree Ambassador and support our global reforestation efforts</p>
                        <button className="hero-button">Get Involved</button>
                    </div>
                </div>
                <div className="hero-card" id="business">
                    <img src={image2} alt="Business" />
                    <div className="hero-text">
                        <h1>BUSINESS</h1>
                        <p>Increase your Corporate Social Responsibility</p>
                        <button className="hero-button">Get Involved</button>
                    </div>
                </div>
                <div className="hero-card" id="schools">
                    <img src={image3} alt="Schools" />
                    <div className="hero-text">
                        <h1>SCHOOLS</h1>
                        <p>Bring Environmental Education to classrooms and campuses</p>
                        <button className="hero-button">Get Involved</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero2;