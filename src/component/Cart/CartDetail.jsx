import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const CartDetail = ({ cart }) => {
  const handleDelete = (_id) => {
    fetch(`https://brand-shop-server-nine-rho.vercel.app/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted",
            text: "",
            icon: "success",
            confirmButtonText: "OK",
          });
          location.reload()
        }
      });
  };
  const { name, image, price, type, short_description, _id } = cart;
  return (
    <div className="">
      <div className="card card-side h-fit  bg-base-200 shadow-xl">
        <figure className="md:w-1/2">
          <img src={image} alt={type} className="h-96" />
        </figure>
        <div className="card-body w-3/4 md:w-1/2">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="font-semibold text-xl">{price}</p>
          <h1 className="font-medium text-base">{short_description}</h1>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
