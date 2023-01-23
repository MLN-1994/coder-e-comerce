

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
        <button className="flex items-center justify-center p-2 w-8 h-8 rounded-full shadow-md  border bg-blue-400 hover:bg-blue-500 text-white" onClick={handleRemoveProduct}>-</button>
        <span className="flex justify-center items-center text-lg font-bold">{productCount}</span>
        <button className="flex items-center justify-center p-2 w-8 h-8 rounded-full shadow-md border bg-blue-400 hover:bg-blue-500 text-white" onClick={handleAddProduct}>+</button>
      </div>
      <div >
        <button onClick={handleAddToCart} className="p-4 border w-full font-bold shadow-md bg-blue-400 hover:bg-blue-500 text-white rounded-md">Agregar al carrito</button>
      </div>
    </div>
</>
  );
};

export default ItemCount;
