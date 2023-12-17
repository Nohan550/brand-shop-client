import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BrandProds from "./BrandProds";

const BrandProducts = () => {
  const [brandProd, setBrandProd] = useState();
  const { brand_name } = useParams();

  const brandsProducts = useLoaderData();

  useEffect(() => {
    const findBrand = brandsProducts?.filter(
      (brandProduct) => brandProduct.brand_name == brand_name
    );
    setBrandProd(findBrand);
  }, [brand_name, brandsProducts]);

  if (brandProd == 0) {
    return (
      <div className="hero h-[500px] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-red-500">Sorry</h1>
            <p className="py-6 text-2xl">
              No products to show.<br></br>
              <span className="text-4xl">Big surprise incoming</span>.<br></br>
              Stay with us
            </p>
            <Link to="/">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-5 py-10 md:grid-cols-2 lg:grid-cols-4 lg:px-48  ">
      {brandProd?.map((prods) => (
        <BrandProds key={prods._id} prods={prods}></BrandProds>
      ))}
    </div>
  );
};

export default BrandProducts;
