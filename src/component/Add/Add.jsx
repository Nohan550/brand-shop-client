const Add = () => {
  return (
    <div className="hero Short Description bg-base-200">
      <div
        className="hero-content flex-col 
        "
      >
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Add Product</h1>
        </div>
        <div className="card  w-full shadow-2xl bg-base-100">
          <form className="card-body ">
            <div className="form-control grid grid-cols-2 gap-3">
              <div>
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  list="brands"
                  placeholder="Brand Name"
                  className="input input-bordered"
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
                  type="text"
                  list="types"
                  placeholder="Type"
                  className="input input-bordered"
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
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type=""
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
