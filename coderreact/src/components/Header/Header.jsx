import { FaShoppingCart } from "react-icons/fa";
const Header = (props) => {
    console.log(props)
    return (
        

        <div className="w-full bg-yellow-300 p-4 flex justify-around shadow-md ">
            <div className="">
                <h1 className="text-3xl font-bold tracking-[.25em]">Mercado Flaco</h1>
            </div>
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
        </div>
    )
}
export default Header