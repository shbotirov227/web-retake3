import React from 'react';
import GiftCards from "../../assets/images/giftCards.jpg";

import "./GiftCard.scss";

const GiftCard = () => {
    return (
        <div className="GiftCard container">
            <h2 className="mainTitle">🚀• GiftCard</h2>
            
            <div className="GiftCard-inner">
                <h3 className="GiftCard-title">Gift cards for our loyal customers !</h3>
                <img src={GiftCards} alt="" />
            </div>
        </div>
    );
}

export default GiftCard;