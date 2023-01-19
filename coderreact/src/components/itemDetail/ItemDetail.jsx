import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, name, description, image, price, stock }) => {


  const { addCart, isIncart} = useContext(CartContext)
  console.log(isIncart(id));

  //funcion volver, pasar a layout para que se vea en todas las pag excepto inicio
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };


  const [productCount, setProductCount] = useState(1);

  const handleAddToCart = () => {
    const item = {
      id, name, description, image, price, stock 
    }

    addCart(item)
  }

 
  return (
    <>
      <div className="grid grid-cols-12 mt-4">
        <button
          className="p-2 border bg-blue-400 col-start-11 text-white"
          onClick={handleBack}
        >
          Volver
        </button>
      </div>

      <div className="flex h-screen items-center justify-center">
        <div className="w-64 border ">
          <p className="text-xl">{name}</p>
          <img src={image} alt={name} />
          <p>{description}</p>
          <p className="">Total: ${price}</p>

          {
            !isIncart(id)
              ?
              <ItemCount 
            max={stock}
            productCount={productCount}
            setProductCount={setProductCount}
            handleAddToCart={handleAddToCart}
            />
              : 
              <Link className="border " to= "/cart">Terminar compra</Link>
          }

          
            
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
