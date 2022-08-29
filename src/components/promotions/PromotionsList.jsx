import React from 'react'
import { useState, useEffect } from 'react'
import './PromotionList.scss'
import {PromotionCard} from './PromotionCard'
import { useNavigate } from 'react-router-dom'


const isLoggedIn=()=>{
    localStorage.removeItem('token')
    let token = localStorage.getItem('token')
    const result = token === null || token === undefined || token === ''
    console.log( token, !result )
    return  !result
  }


const PromotionsList = () => {
    const [promotions,setPromotions]=useState([])
    const navigate = useNavigate()
    
    useEffect (()=>{
        if ( !isLoggedIn() ) {
            console.log('redirect to login')
            navigate('login')
        }

        fetch ("http://localhost:5000/alldata",{
            method: "GET",
            headers:{
                "auth-token":localStorage.getItem("token")
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