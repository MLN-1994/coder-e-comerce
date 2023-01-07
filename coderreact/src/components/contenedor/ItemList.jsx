const ItemList = ({ products }) => {
  return (
    <>
      <div className="">
        <h1 className="">Nuestros Productos</h1>
      </div>

      <section className="grid grid-cols-6 gap-2 m-2 p-2">
        {products.map((prod) => (
          <div className="" key={prod.id}>
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            
            <p>${prod.price}</p>
            <button className="p-2 border">Ver mas</button>
          </div>
        ))}
      </section>
    </>
  );
};
export default ItemList