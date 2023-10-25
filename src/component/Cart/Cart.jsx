import { useLoaderData } from "react-router-dom";
import CartDetail from "./CartDetail";


const Cart = () => {
    const cartProd = useLoaderData();
    console.log(cartProd)
    return (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-10 lg:px-10 min-h-[500px] content-center">
            {
                cartProd?.map(cart => <CartDetail key={cart._id} cart={cart} ></CartDetail>)
            }
        </div>
    );
};

export default Cart;