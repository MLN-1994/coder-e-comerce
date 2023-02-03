import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <>
    

      <section className="grid grid-cols-6 gap-4 m-2 mb-4 p-2 bg-neutral-50">
        {products.map((prod) => (
          <div
            className="shadow-lg rounded-md border p-2 bg-white"
            key={prod.id}
          >
            <div className="w-full flex justify-center items-center">
              <img className="" src={prod.image} alt={prod.name} />
            </div>

            <div className="px-2 py-2">
              <h3 className="font-bold">{prod.name}</h3>
              <h5>{prod.category}</h5>
              <p className="font-semibold">${prod.price}</p>
            </div>

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
