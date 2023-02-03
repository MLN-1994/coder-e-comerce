import {  useState } from "react";
import { LoginContext, useLoginContext } from "../../context/LoginContext";


const LoginScreen = () => {
  const { login } = useLoginContext(LoginContext);

  const [values, setValues] = useState({
    email: "marianolangge@gmail.com",
    password: "hola",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(values);
  };

  return (
    <>
     
      <div className="">
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="font-bold text-lg mb-6">Loguearme</p>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            action=""
          >
            <p className="font-semibold">Email:</p>
            <input
              type={"email"}
              className="bg-white p-2 rounded-md shadow-md text-gray-700 font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800 flex  items-center"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />

            <p className="font-semibold">Contraseña</p>
            <input
              type={"password"}
              className="bg-white p-2 rounded-md shadow-md text-gray-700 font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800 flex  items-center"
              value={values.password}
              onChange={handleInputChange}
              name="password"
            />

            <button className="p-2 border w-full font-bold shadow-md bg-blue-400 hover:bg-blue-500 text-white rounded-md">
              Ingresar
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginScreen;
