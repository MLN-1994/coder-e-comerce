import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 bottom-0  w-full h-24 text-center flex items-center justify-center flex-col  ">
      <p className='text-white'>Mariano Langge </p>
      
      <p className=""> Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;