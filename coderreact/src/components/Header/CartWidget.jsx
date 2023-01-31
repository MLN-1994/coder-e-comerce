import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { showCartNumber } = useContext(CartContext);

  return (
    <div className="">
      <div className="relative">
        <Link to={"/cart"} className="">
          <FaShoppingCart className="text-4xl cursor-pointer	" />
        </Link>
        <div
          className={`absolute top-3.5 right-6 w-6 rounded-full flex justify-center ${
            showCartNumber() > 0 ? "bg-red-600 animate-bounce" : "bg-blue-400"
          }`}
        >
          <span className=" text-white ">{showCartNumber()}</span>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;


