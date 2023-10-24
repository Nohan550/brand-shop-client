import { useEffect } from "react";
import { useState } from "react";
import Brand from "./Brand";



const Brands = () => {
    const[brands,setBrands]=useState(); 
  useEffect(() =>{
    fetch('/brand.json')
    .then(res => res.json() )
    .then(data=>setBrands(data) )   
  },[]) 

    return (
        <div className="bg-cyan-600 py-4 text-white">
            <h1 className="text-center text-4xl font-semibold py-2">Our Brands</h1>
     <div className="grid grid-cols-2 md:grid-cols-3 gap-5 items-center">
     {
            brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>
                
            ) 
        }
     </div>
        </div>
    );
};

export default Brands;