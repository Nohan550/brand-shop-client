import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const Update = () => {
  const loadedProd = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;

    const updateProduct = { name, image, brand_name, type, rating, price };

    fetch(
      ` https://brand-shop-server-9twbnvq2p-nohan550s-projects.vercel.app/brands/${loadedProd._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Congratulation",
            text: "Product updated",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero  bg-base-200">
        <div
          className="hero-content flex-col 
        "
        >
          <div className="text-center ">
            <h1 className="text-4xl font-bold">
              Update Product {loadedProd.name}
            </h1>
          </div>
          <div className="card  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body ">
              <div className="form-control grid grid-cols-2 gap-3">
                <div className="">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    defaultValue={loadedProd?.image}
                    name="image"
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    defaultValue={loadedProd?.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    defaultValue={loadedProd?.brand_name}
                    name="brand_name"
                    type="text"
                    list="brands"
                    placeholder="Brand Name"
                    className="input input-bordered w-full"
                    required
                  />
                  <datalist id="brands">
                    <option>Apple</option>
                    <option>Samsung</option>
                    <option>Sony</option>
                    <option>Google</option>
                    <option>Tesla</option>
                    <option>Intel</option>
                  </datalist>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    defaultValue={loadedProd?.type}
                    name="type"
                    type="text"
                    list="types"
                    placeholder="Type"
                    className="input input-bordered w-full"
                    required
                  />
                  <datalist id="types">
                    <option>Phone</option>
                    <option>Computer</option>
                    <option>Headphone</option>
                    <option>Car</option>
                    <option>Proccessor</option>
                    <option>Watch</option>
                  </datalist>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    defaultValue={loadedProd?.rating}
                    name="rating"
                    type="text"
                    placeholder="Rating"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    defaultValue={loadedProd?.price}
                    name="price"
                    type="text"
                    placeholder="Price"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-600 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
