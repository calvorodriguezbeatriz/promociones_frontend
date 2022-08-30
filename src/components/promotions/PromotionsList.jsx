import React from 'react'
import { useState, useEffect } from 'react'
import './PromotionList.scss'
import {PromotionCard} from './PromotionCard'




const PromotionsList = () => {
    const [promotions,setPromotions]=useState([])
    
    useEffect (()=>{
        const token = localStorage.getItem('token')

        fetch ("http://localhost:5000/alldata",{
            method: "GET",
            headers:{
                "auth-token": token
            }
        })
        .then((response)=>{
            response.json()
            .then(data=>{
                setPromotions (data)
            })
        })
    },[])
    

    return (
        <div className="promotion-list content" >
            <h1>Nuestros descuentos en hoteles</h1>
            <div className="promotion-list-items">
            {
                promotions.map((promotion)=>{
                    return (
                        // <div onClick={()=>{navigate ("promotion/" +promotion.id)}}>
                        <PromotionCard key={promotion.id} promotion={promotion}/>
                        // </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default PromotionsList