
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";



export const requestCategories = () => {

  return new Promise((resolve, reject) => {

    const productsRef = collection(db, "products");

    getDocs(productsRef).then((querySnapshot) => {

      const categories = querySnapshot.docs.map((doc) => doc.data().category);

      const uniqueCategories = categories.filter((item, index) => categories.indexOf(item) === index);

      resolve(uniqueCategories);

    });

  });

};

