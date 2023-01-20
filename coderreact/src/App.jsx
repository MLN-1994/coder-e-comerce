import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/contenedor/ItemListContainer";
import ItemDetailContainer from "./components/itemDetalContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="*" element={<Navigate to={"/"} />} />
            <Route exact path="/contacto" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
