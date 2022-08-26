import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
                setPromotion (data[0])
            })
        })
    },[promotionId])

    return (
        <div className="promotion-view">
            <h1>Detalle de la promoción</h1>
            <div key={promotion?.id}>
                <h2>{promotion?.brand}</h2>
                <img src={promotion?.logo}/>
                <h3>{promotion?.discount}</h3>
                <h3>{promotion?.title}</h3>
                <img src={promotion?.image}/>
                <p>{promotion?.description}</p>
                <button>{promotion?.coupon}</button>
            </div>
        </div>
    )
}

export default PromotionView