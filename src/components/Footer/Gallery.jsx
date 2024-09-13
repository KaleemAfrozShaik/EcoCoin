import React from 'react'
import './Gallery.css'
import { FaCircleArrowRight,FaCircleArrowLeft } from "react-icons/fa6";
import apple from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/apple.jpg'
import mango from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/mango.png'
import orange from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/orange.png'
import strawberry from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/strawberry.png'
import guava from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/guava.png'
const Gallery = () => {
    return (
        <>
            <div className="gallery-conatiner">
                <button className="left"><FaCircleArrowLeft /></button>
                <div className="gallery-items">
                    <span><img src={apple} alt="" /></span>
                    <span><img src={mango} alt="" /></span>
                    <span><img src={orange} alt="" /></span>
                    <span><img src={strawberry} alt="" /></span>
                    <span><img src={guava} alt="" /></span>
                </div>
                <button className="right"><FaCircleArrowRight /></button>
            </div>
        </>
    )
}

export default Gallery