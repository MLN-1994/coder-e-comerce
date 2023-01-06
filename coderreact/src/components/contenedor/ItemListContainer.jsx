import { useEffect, useState } from "react";
import {requestData} from "../../helpers/requestData"
import ItemList from "../contenedor/ItemList"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  

 

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
      <div>
        <ItemList products={products}/>
      </div>
    </>
  );
};

export default ItemListContainer;
