import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"


const Checkout = () =>{
    const {cart, totalPriceCart} = useCartContext()
    
    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: ""
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        //validacion
        // if(values.nombre.length <2 && values.nombre !== ""){
        //     console.log("mal")
        // }



        const order = {
            client: values,
            items: cart,
            total: totalPriceCart()
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, order)
        .then((doc) => console.log(doc.id))
        .catch((error)=> console.log(error))

    }




    if (cart.length === 0) {
        return <Navigate to="/"/>
    }


    return (
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center h-screen">
                <p className="font-bold text-lg mb-6">Finalizar compra</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col  gap-4  ">
                    <input 
                    className="bg-white p-2 rounded-md shadow-md text-gray-700 font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800 flex  items-center"
                    type="text"
                    onChange={handleInputChange}
                    name= "nombre"
                    value={values.nombre}
                    placeholder="Tu nombre"
                    />
                    <input 
                    className="bg-white p-2 rounded-md shadow-md text-gray-700 font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800 flex  items-center"
                    type="text"
                    onChange={handleInputChange}
                    name= "direccion"
                    value={values.direccion}
                    placeholder="Tu direccion"
                    />
                    <input 
                    className="bg-white p-2 rounded-md shadow-md text-gray-700 font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800 flex  items-center"
                    type="email"
                    onChange={handleInputChange}
                    name= "email"
                    value={values.email}
                    placeholder="Tu email"
                    />
                    
                    <button className="p-2  rounded-md bg-blue-400 hover:bg-blue-500 text-white ">Enviar</button>
                     
                </form>
                </div>
            </div>
        </>
    )
}

export default Checkout