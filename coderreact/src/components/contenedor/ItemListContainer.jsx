import { useEffect, useState } from "react";
import MockData from "../../data/MOCK_DATA.json";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const requestData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MockData);
      }, 1500);
    });
  };

  useEffect(() => {
    requestData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {products.map((prod) => (
        <div className="" key={prod.id}>
          
          <img src={prod.image} alt={prod.name} />
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>${prod.price}</p>

        </div>
      ))}
    
    </>
  );
};

export default ItemListContainer;
