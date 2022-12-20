
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () =>{
    return (
        <div className=""> 
                <div className="relative">
                <div className="">
                   <FaShoppingCart className="text-4xl cursor-pointer	"/>
                </div> 
                <div className="absolute top-3.5 right-6 w-6  bg-blue-400 rounded-full flex justify-center ">
                    <span className=" text-white ">0</span>
                </div>
                </div>
            </div>
    )
}

export default CartWidget