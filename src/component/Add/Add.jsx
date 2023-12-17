import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const Add = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const short_description = form.short_description.value;

    const product = {
      name,
      image,
      brand_name,
      type,
      rating,
      price,
      short_description,
    };

    fetch(" https://brand-shop-server-nine-rho.vercel.app/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "YAY!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="hero  bg-base-200">
      <div
        className="hero-content flex-col 
        "
      >
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Add Product</h1>
        </div>
        <div className="card  w-full shadow-2xl bg-base-100">
          <form onSubmit={handleAdd} className="card-body ">
            <div className="form-control grid grid-cols-2 gap-3">
              <div className="">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
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
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  name="short_description"
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-600 text-white">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
