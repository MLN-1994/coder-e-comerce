import { useState } from "react"

 const ItemDetail = ({id, name, description, image, price}) => {



    const [productCount, setProductCount] = useState(0)
    const handleAddProduct = () =>{
        setProductCount(productCount + 1)
    }
    const handleRemoveProduct = () =>{
        setProductCount(productCount - 1)
    }
    
    return(
        <div className="">
            <p className="text-xl">{name}</p>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p className="">Total: ${price}</p>
            <div className="flex gap-4">
            <button onClick={handleAddProduct} className="p-1 border">+</button>
            <button onClick={handleRemoveProduct} className="p-1 border">-</button>
            </div>
            
        </div>
    )
}
export default ItemDetail