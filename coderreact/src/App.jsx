
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/contenedor/ItemListContainer'
import ItemDetailContainer from './components/itemDetalContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import {CartContext} from "./context/CartContext"
import { useState } from 'react';

function App() {


  const [cart, setCart]=useState([])
  console.log(cart);

    const addCart = (item) =>{
      setCart([...cart, item])
    }

    const isIncart = (id) =>{
      return cart.some(item => item.id === id)
    }


  return (


    <CartContext.Provider value = { {cart, addCart, isIncart} }>
      

    <div className="">


      <BrowserRouter>

        <Header />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path="*" element={<Navigate to={"/"}/>}/>
          <Route exact path='/contacto' element={<Contact/>}/>
        </Routes>


      </BrowserRouter>

    </div>
    </CartContext.Provider> 
  )
}

export default App
