import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import BackButton from "../backButton/BackButton";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, emptyCart, totalPriceCart, removeItem } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div className="">
          <BackButton />
        </div>
        <div className="flex justify-center">
          <p className="text-xl font-bold  mt-6">Carrito vacio</p>
        </div>
      </>
    );
  }

  return (
    <>
      <BackButton />

      <div className="">
        {cart.map((item) => (
          <div className=" border">
            <div key={item.id} className="">
              <div className="grid grid-cols-12 p-2 shadow-lg  items-center ">
                <p className="font-bold col-start-2">{item.name}</p>
                <div className="col-start-4 ">
                  <img className="w-12" src={item.image} alt="" />
                </div>
                <div className="col-start-6">
                  <p className="font-light">{item.productCount}</p>
                </div>
                <p className="font-semibold col-start-8">
                  $ {item.price * item.productCount}
                </p>
                <div className="col-start-12 ">
                  <button onClick={() => removeItem(item.id)} className="">
                    <FaTrash className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end m-2">
          <div className="flex flex-col ">
            <div className="p-2 mb-6">
              <p className="font-bold">Total: ${totalPriceCart()}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={emptyCart}
                className="p-2  rounded-md bg-blue-400 hover:bg-blue-500 text-white "
              >
                Vaciar carrito
              </button>
              <Link
                to="/checkout"
                className="p-2  rounded-md bg-blue-400 hover:bg-blue-500 text-white "
              >
                Ir a pagar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
