import { useEffect, useState } from "react";
import { useParams, useRoutes } from "react-router-dom";
// import { requestByItemCategory, requestData } from "../../helpers/requestData";
import ItemList from "../contenedor/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  // const getItems = async () => {
  //   const request = id ? requestByItemCategory(id) : requestData();

  //   request
  //     .then((res) => {
  //       setProducts(res);
        
  //     })
  //     .catch((err) => {
  //       console.log(err);
        
  //     })
  //     .finally(()=>{
  //       setLoading(false)
  //     })
  // };

  useEffect(() => {
    setLoading(true)

    const productsRef = collection(db, "products")

    getDocs(productsRef)
    .then((resp) =>{
      setProducts(resp.docs.map((doc) => {

        return {
          ...doc.data(),
          id: doc.id
        }

      }))
    })
    .finally(()=>{
      setLoading(false)
    })


    // getItems();
  }, [id]);

  return (
    <>
      <div>
        {
          loading
          ? <p className="text-lg font-bold flex justify-center items-center h-screen">Cargando...</p>
          :<ItemList products={products} />
        }
        
      </div>
    </>
  );
};

export default ItemListContainer;
