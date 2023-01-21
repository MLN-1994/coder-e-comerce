

//los datos provienen del componente padre itemDetail
const ItemCount = ({max, productCount, setProductCount, handleAddToCart}) => {
  

  


  const handleRemoveProduct = () => {
    productCount > 0 && setProductCount(productCount - 1);
    
  };

  const handleAddProduct = () => {
    productCount < max && setProductCount(productCount + 1);
     
  };
  

  return (<>
    
    <div className="">

      <div className="flex gap-1 m-2">
        <button className="p-2  border bg-blue-400 rounded-md text-white" onClick={handleRemoveProduct}>-</button>
        <span className="flex justify-center items-center">{productCount}</span>
        <button className="p-2 border bg-blue-400 rounded-md text-white" onClick={handleAddProduct}>+</button>
      </div>
      <div >
        <button onClick={handleAddToCart} className="p-2 border w-full bg-blue-400  text-white">Agregar al carrito</button>
      </div>
    </div>
</>
  );
};

export default ItemCount;
