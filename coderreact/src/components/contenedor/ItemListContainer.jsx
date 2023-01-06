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
        <div className="">
          <div className="">
          <img src={products[0].image} alt={products.name} />
          <h3>{products[0].name}</h3>
          <p>{products[0].description}</p>
          <p>${products[0].price}</p>
          </div>
        </div>
      ))}
      {/* {
      products.length > 0 && (
       
      )} */}
    </>
  );
};

export default ItemListContainer;
