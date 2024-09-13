import React from "react";
import './RedeemPage.css';
import Bms from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/BookMyShow.png';
import Ajio from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/Ajio.png';
import Swiggy from '/Users/afroz/myapp/src/components/EcoCoin/EcoCoin/src/assets/Swiggy.png';

const RedeemPage = () => {
    return(
        <>
            <div className="topContainer">
                <h1 className="topContainer-heading">EcoCoin Store</h1>
                <p className="topContainer-text">Shop in our store or redeem your favourite coupons for free by using EcoCoins.</p>
                <div id="balance-points">
                    <p id="subheading">Your Points :</p>
                    <p>0</p>
                </div>
            </div>
            <div className="mainContainer">
                <div className="mainContainer-card">
                    <div className="card-img" id="card-img1">
                        <img src={Bms} alt="" />
                    </div>
                    <p className="card-text">BookMyShow Coupon</p>
                    <p className="card-discount-text">40% discount on all Tollywood films</p>
                    <p className="card-item-cost">500 Coins</p>
                    <button>Redeem</button>
                </div>
                <div className="mainContainer-card">
                    <div className="card-img" id="card-img2">
                        <img src={Ajio} alt="" />
                    </div>
                    <p className="card-text">Ajio Coupon</p>
                    <p className="card-discount-text">50% discount on all Casual Wear & Shoes</p>
                    <p className="card-item-cost">1000 Coins</p>
                    <button>Redeem</button>
                </div>
                <div className="mainContainer-card">
                    <div className="card-img" id="card-img3">
                        <img src={Swiggy} alt="" />
                    </div>
                    <p className="card-text">Swiggy Coupon</p>
                    <p className="card-discount-text">Upto 60% discount on Biryani's & Desserts</p>
                    <p className="card-item-cost">100 Coins</p>
                    <button>Redeem</button>
                </div>
            </div>
        </>
    )
}

export default RedeemPage;
