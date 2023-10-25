import { Link } from "react-router-dom";

const BrandProds = ({ prods }) => {
  const { name, image, brand_name, type, price, rating,_id } = prods;
  console.log(prods);
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-300 shadow-xl">
        <figure>
          <img src={image} alt={type} className="w-full h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-neutral">{brand_name}</div>
          </h2>
          <p>{type}</p>
          <div className="card-actions">
            <div className="badge badge-accent badge-lg text-white">
              {price}
            </div>
            <div className="badge badge-outline badge-lg badge-success">
              rating {rating}
            </div>
          </div>
          <div className="btn-group justify-end">
            <Link to={`/brand/${brand_name}/${name}/${_id}`}><button className="btn btn-info  text-white">Details</button></Link>
            <Link to={`/update/${_id}`}><button className="btn btn-warning ">Update</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProds;
