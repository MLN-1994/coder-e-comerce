import { useState } from "react"
import { useNavigate } from "react-router-dom"

 const ItemDetail = ({id, name, description, image, price}) => {

    const navigate = useNavigate()
    const handleBack = () =>{
        navigate(-1)
    }

    const [productCount, setProductCount] = useState(0)
    const handleAddProduct = () =>{
        setProductCount(productCount + 1)
    }
    const handleRemoveProduct = () =>{
        setProductCount(productCount - 1)
    }
    
    return(
   
        <>
        <div className="grid grid-cols-12 mt-4">
            <button className="p-2 border bg-blue-400 col-start-11 text-white" onClick={handleBack}>Volver</button>
        </div>
        <div className="flex h-screen items-center justify-center">
            <div className="w-64 border ">
            <p className="text-xl">{name}</p>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p className="">Total: ${price}</p>
            <div className="flex gap-2 mb-2">
            <button onClick={handleAddProduct} className="p-2  border">+</button>
            <button onClick={handleRemoveProduct} className="p-2 border">-</button>
            
            </div>
            </div>
        </div>
        </>
    )
}
export default ItemDetail