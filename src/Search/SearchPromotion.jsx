// import React, { useEffect, useState }from 'react';
// import PromotionsList from '../components/promotions/PromotionsList';

// const SearchPromotion = () => {
//     const [searchPromotion,setSearchPromotion]=useState([])

//     useEffect (()=>{
//         fetch ("http://localhost:5000/search-promotion-bybrand/$!",{
//             method: "GET"
//         })
//             .then((response)=>{
//                 response.json()
//                 .then(data=>{
//                     setSearchPromotion (promotionsFilter)
//                 })
//             })
//         },[])

// return (
//     <div> Buscador</div>
// )
// }


// export default SearchPromotion