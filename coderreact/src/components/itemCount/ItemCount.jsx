import { useState } from "react";

const ItemCount = () => {
  

  const [productCount, setProductCount] = useState(1);

  const handleAddProduct = () => {
    setProductCount(productCount + 1);
  };
  const handleRemoveProduct = () => {
    productCount > 0 && setProductCount(productCount - 1);
    
  };

  return (
    <div className="">
      <div className="flex gap-2 mb-2">
        <button className="p-2  border" onClick={handleAddProduct}>+</button>
        <span>{productCount}</span>
        <button className="p-2 border" onClick={handleRemoveProduct}>-</button>
      </div>
    </div>
  );
};

export default ItemCount;
