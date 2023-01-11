import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { requestCategories } from "../../helpers/requestData";
import CartWidget from "./CartWidget"

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

    }

    const handleChangeCategory = (event) => {

        navigate(`/category/${event.target.value}`);

    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        

        <div className="w-full bg-yellow-300 p-4 flex justify-around shadow-md">
            <div className="">
                <Link to="/">
                    <h1 className="text-3xl font-bold tracking-[.25em]">Mercado Flaco</h1>
                </Link>
            </div>
            <div>
                <select onChange={(event) => handleChangeCategory(event)} name="" id="">
                    {
                        categories.map((category) => (
                            <option value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
            <div className="hover:animate-bounce">
                <CartWidget />
            </div>
            
        </div>
    )
}
export default Header