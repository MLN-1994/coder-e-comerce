import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {
    
    const {cart} = useContext(CartContext)
    
    return(
        <div className="">
            <p className="">Tu compra</p>
            <hr />

            {
                cart.map(item =>(
                    <div className="">
                    <div key={item.id} className="">
                        <p className="">{item.name}</p>
                        <img className="" src={item.image} alt="" />
                        <p className="">$: {item.price * item.productCount}</p>
                    </div>
                        <button className="p-2 border">Vaciar carrito</button>
                    </div>
                    
                ))
            }

        </div>
    )
}

export default Cart