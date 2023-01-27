import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestCategories } from "../../helpers/requestData";
import CartWidget from "./CartWidget";
import Logout from "./Logout";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const getCategories = () => {
    requestCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeCategory = (event) => {
    navigate(`/category/${event.target.value}`);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full  p-4 flex justify-around shadow-md">
      <div className="">
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-[.25em]">Mercado Flaco</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        
        <select
          className="bg-white p-2 rounded-md shadow-md text-gray-700 font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800 flex  items-center"
          onChange={(event) => handleChangeCategory(event)}
          name=""
          id=""
        >
         
          {categories.map((category) => (
            <option className="text-gray-700 border-no" value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-6">
        <CartWidget />
        <Logout/>
      </div>
    </div>
  );
};
export default Header;
