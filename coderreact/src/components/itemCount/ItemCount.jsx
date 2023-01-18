

const ItemCount = ({max, productCount, setProductCount, handleAddToCart}) => {
  

  


  const handleRemoveProduct = () => {
    productCount > 0 && setProductCount(productCount - 1);
    
  };

  const handleAddProduct = () => {
    productCount < max && setProductCount(productCount + 1);
     
  };
  

  return (
    <div className="">
      <div className="flex gap-1 m-2">
        <button className="p-2  border" onClick={handleRemoveProduct}>-</button>
        <span className="flex justify-center items-center">{productCount}</span>
        <button className="p-2 border" onClick={handleAddProduct}>+</button>
      </div>
      <div >
        <button onClick={handleAddToCart} className="p-2 border w-full">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
