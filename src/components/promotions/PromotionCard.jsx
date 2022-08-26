import React from "react"
import {useNavigate} from  'react-router-dom';

export const PromotionCard = (props) => {
    const navigate=useNavigate()

    return (
        <div className="promotion-card" onClick={()=>{navigate ("promotion/" +props.promotion.id)}}>
            <img className="offer-image" src={props.promotion.image} />
            {/* <p>{props.promotion.brand}</p> */}

            <div className="offer-details">
                <h3 className="discount-detail">{props.promotion.discount}</h3>
                <img className="logo-img" src={props.promotion.logo} />
                <h3 className="offer-title">{props.promotion.title}</h3>
                <span className="coupon">{props.promotion.coupon}</span>
            </div>
        </div>
    )
}
