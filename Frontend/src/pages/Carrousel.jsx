import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
//import ProductInfo from "../components/ProductInfo";
import getProductById from "../selectors/getProductById";

const Carrousel = () => {

   window.scrollTo(0,0)
  
   const {itemId} = useParams();
   console.log(itemId === '6');

   const product = getProductById(itemId);
   console.log(product);

   
   

   return (
      <> 
         <Announcement />
         <Navbar />
        {/*  {
            product.map(item => (
               <ProductInfo key={item.id} {...item}/>
            ))
         } */}
         {/* <ProductInfo name={product[0].name}/> */}
      </>
   );
};

export default Carrousel;
