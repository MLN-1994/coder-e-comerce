import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";


const ItemDetail = ({ id, name, description, image, price }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

 
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
          <ItemCount/>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
