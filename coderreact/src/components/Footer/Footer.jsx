import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 bottom-0  w-full h-16 text-center flex items-center justify-center px-2 fixed ">
      <p className="text-white">Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;