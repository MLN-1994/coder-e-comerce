import { useContext } from "react";
import { useState } from "react";
import BackButton from "../backButton/BackButton";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, description, image, price, stock }) => {
  const { addCart, isIncart } = useContext(CartContext);
  console.log(isIncart(id));

  const [productCount, setProductCount] = useState(1);

  const handleAddToCart = () => {
    const item = {
      id,
      name,
      description,
      image,
      price,
      stock,
      productCount,
    };

    addCart(item);
  };

  return (
    <>
      <BackButton />

      <div className="flex h-screen items-center justify-center">
        <div className="w-3/12 border grid grid-cols-12 rounded-md shadow-md">
          <div className="col-span-12 p-4">
            <div className="flex justify-center">
              <p className="text-xl font-bold mb-2">{name}</p>
            </div>
            <div className="flex justify-center items-center">
              <img className="rounded-md" src={image} alt={name} />
            </div>

            <p className="">{description}</p>
            <p className="font-bold">Total: ${price}</p>

            {!isIncart(id) ? (
              <ItemCount
                max={stock}
                productCount={productCount}
                setProductCount={setProductCount}
                handleAddToCart={handleAddToCart}
              />
            ) : (
              <Link className=" " to="/cart">
                <button className="p-4 border w-full font-bold shadow-md bg-blue-400 hover:bg-blue-500 text-white rounded-md">
                  Finalizar compra
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
