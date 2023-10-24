import { useLoaderData, useParams } from "react-router-dom";


const BrandProducts = () => {
  const {brand_name} = useParams ()
  console.log (brand_name)  
    const products = useLoaderData () ;
    console.log(products) 
    return (
        <div>
            hi
        </div>
    );
};

export default BrandProducts;