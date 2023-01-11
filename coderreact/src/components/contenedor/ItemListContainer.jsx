import { useEffect, useState } from "react";
import { useParams, useRoutes } from "react-router-dom";
import { requestByItemCategory, requestData } from "../../helpers/requestData"
import ItemList from "../contenedor/ItemList"

const ItemListContainer = () => {


  const [products, setProducts] = useState([]);

  const { id } = useParams();

  const getItems = async () => {

    const request = id ? requestByItemCategory(id) : requestData();

    request
      .then((res) => {

        setProducts(res);

      })
      .catch((err) => {

        console.log(err);

      });


  }


  useEffect(() => {

    getItems();

  }, [id]);

  return (
    <>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
