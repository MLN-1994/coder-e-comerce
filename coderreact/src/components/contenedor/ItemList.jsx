import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="">
        <p className="p-2 mt-2 flex justify-center font-semibold shadow-sm"> Nuestros productos</p>
      </div>

      <section className="grid grid-cols-6 gap-4 m-2 mb-4 p-2">
        {products.map((prod) => (
          <div className="shadow-lg rounded-md border p-2 " key={prod.id}>
            <div className="w-full flex justify-center items-center">
            <img className="" src={prod.image} alt={prod.name} />
            </div>
            <h3 className="font-bold">{prod.name}</h3>
            <h5>{prod.category}</h5>
            <p className="font-semibold">${prod.price}</p>

            <Link to={`/item/${prod.id}`}>
              <button className="p-2 border bg-blue-400 hover:bg-blue-500 text-white rounded-md">
                Ver mas
              </button>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};
export default ItemList;
