import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PromotionView.scss'

const PromotionView = () => {
    const [promotion,setPromotion]=useState()
    const params=useParams ()
    const promotionId= params.id
    console.log (promotionId)
    useEffect (()=>{
        fetch ("http://localhost:5000/promotion/"+promotionId,{
            method: "GET"
        })
        .then((response)=>{
            response.json()
            .then(data=>{
                console.log (data)
                setPromotion (data)
            })
        })
    },[promotionId])

    return (
        <div className="promotion-view">
            <h1>Detalle de la promoción</h1>
            <div key={promotion?.id}>
                <div className="offer-top">
                <h2>{promotion?.brand}</h2>
                <h3 className="tag">{promotion?.discount}</h3>
                <img className="logo" src={promotion?.logo}/>
                </div>
                <h3>{promotion?.title}</h3>
                <img src={promotion?.image}/>
                <p>{promotion?.description}</p>
                <button className="button-default">{promotion?.coupon}</button>
            </div>
        </div>
    )
}

export default PromotionView