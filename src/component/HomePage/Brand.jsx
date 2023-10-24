import { Link } from "react-router-dom";




const Brand = ({ brand }) => {
  const { brand_name, brand_image } = brand;
  return (
    <div className="mx-auto">
    <Link to={`/brands/${brand_name}`}>
    <div
        className="hero h-40 w-48 md:w-56 lg:w-[450px] lg:h-56"
        style={{
          backgroundImage:
            `url(${brand_image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className=" text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl lg:text-4xl font-bold">{brand_name}</h1>
          
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default Brand;
